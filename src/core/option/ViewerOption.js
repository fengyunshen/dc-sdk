/*
 * @Author: Caven
 * @Date: 2019-12-30 09:24:37
 * @Last Modified by: Caven
 * @Last Modified time: 2020-02-25 20:38:05
 */

import Cesium from '@/namespace'

class ViewerOption {
  constructor(viewer) {
    this._viewer = viewer
    this._init()
  }

  _init() {
    this._viewer.delegate.cesiumWidget._creditContainer.style.display = 'none'
    this._viewer.delegate.cesiumWidget.screenSpaceEventHandler.removeInputAction(
      Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK
    )
    this._viewer.delegate.scene.screenSpaceCameraController.maximumZoomDistance = 40489014.0
    this._viewer.delegate.scene.backgroundColor = Cesium.Color.TRANSPARENT
    this._viewer.delegate.scene.postProcessStages.fxaa.enabled = true
  }

  _setViewerOption(options) {
    this._viewer.delegate.shadows = Cesium.defaultValue(options.shadows, false)
    return this
  }

  _setCanvasOption(options) {
    return this
  }

  _setSceneOption(options) {
    this._viewer.delegate.scene.skyAtmosphere.show = Cesium.defaultValue(
      options.skyAtmosphere,
      true
    )
    this._viewer.delegate.scene.sun.show = Cesium.defaultValue(
      options.sun,
      true
    )
    this._viewer.delegate.scene.moon.show = Cesium.defaultValue(
      options.moon,
      true
    )

    this._viewer.delegate.scene.skyBox.show = Cesium.defaultValue(
      options.skyBox,
      true
    )

    this._viewer.delegate.scene.postProcessStages.fxaa.enabled = Cesium.defaultValue(
      options.fxaa,
      false
    )

    return this
  }

  _setGlobeOption(options) {
    this._viewer.delegate.scene.globe.show = Cesium.defaultValue(
      options.globe,
      true
    )
    this._viewer.delegate.scene.globe.enableLighting = Cesium.defaultValue(
      options.enableLighting,
      false
    )

    this._viewer.delegate.scene.globe.depthTestAgainstTerrain = Cesium.defaultValue(
      options.underground,
      false
    )
    return this
  }

  _setClockOption(options) {
    this._viewer.delegate.clock.shouldAnimate = Cesium.defaultValue(
      options.shouldAnimate,
      true
    )
    return this
  }

  setOptions(options) {
    this._setViewerOption(options)
      ._setCanvasOption(options)
      ._setSceneOption(options)
      ._setGlobeOption(options)
      ._setClockOption(options)
    return this
  }
}

export default ViewerOption
