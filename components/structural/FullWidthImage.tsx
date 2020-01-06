import React, { Component } from 'react'
import { Dimensions, Image } from 'react-native'

type FWIProps = {
  imageUrl: string
}

class FullWidthImage extends Component<FWIProps, {}> {
  _isMounted = false

  state = {
    imgWidth: 0,
    imgHeight: 0,
  }

  componentDidMount() {
    this._isMounted = true // https://stackoverflow.com/a/56537704

    Image.getSize(
      this.props.imageUrl,
      (width: number, height: number) => {
        // calculate image width and height
        const screenWidth = Dimensions.get('window').width
        const scaleFactor = width / screenWidth
        const imageHeight = height / scaleFactor
        if (this._isMounted) {
          this.setState({imgWidth: screenWidth, imgHeight: imageHeight})
        }
      },
      (error) => {
        console.log(`failed to get image width: ${error}`)
      }
    )
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  render () {
    const { imgHeight, imgWidth } = this.state

    return (
      <Image
        style={{width: imgWidth, height: imgHeight}}
        source={{ uri: this.props.imageUrl }}
      />
    )
  }
}

export default FullWidthImage
