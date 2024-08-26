/*
 * Copyright (c) 2023, WebRotate 360 LLC. All rights reserved.
 */
var WR360 = (window.WR360 = {}),
  _imageRotator =
    ((Function.prototype.aK = function (eB) {
      return (
        eB.constructor == Function
          ? ((this.prototype = new eB()),
            ((this.prototype.constructor = this).prototype.ct = eB.prototype),
            (this.prototype.iQ = 0),
            (this.prototype.aB = function () {
              for (var ct = this.ct, i = this.iQ; 0 < i; i--) ct = ct.ct;
              return this.iQ++, ct;
            }))
          : ((this.prototype = eB),
            ((this.prototype.constructor = this).prototype.ct = eB)),
        this
      );
    }),
    (String.prototype.pg = function () {
      for (var txt = this, i = arguments.length; i--; )
        txt = txt.replace(new RegExp("\\{" + i + "\\}", "gm"), arguments[i]);
      return txt;
    }),
    (String.prototype.bE = function () {
      return "auto" == this ? 0 : parseInt(this.replace("px", ""));
    }),
    (String.prototype.gO = function () {
      return parseFloat(this.replace("px", ""));
    }),
    (String.prototype.nA = function () {
      var txt = this;
      return (txt = (txt = (txt = (txt = txt.replace(/\r\n/g, "<br>")).replace(
        /\n\r/g,
        "<br>"
      )).replace(/\r/g, "<br>")).replace(/\n/g, "<br>"));
    }),
    (WR360.by = function () {}),
    (WR360.by.fI = function ($elements, onclick, proxy) {
      proxy = void 0 === proxy ? "" : ".proxy" + proxy;
      var gq = "touchstart";
      window.navigator.pointerEnabled
        ? (gq = "pointerdown")
        : window.navigator.msPointerEnabled && (gq = "MSPointerDown"),
        $elements.each(function () {
          var gv = 0;
          jQuery(this).bind(gq + proxy, function (e) {
            return (
              onclick.call(this, e),
              e.stopPropagation(),
              e.preventDefault(),
              (gv = Date.now()),
              !1
            );
          }),
            jQuery(this).bind("click" + proxy, function (e) {
              Date.now() - gv < 400 || ((gv = 0), onclick.call(this, e));
            });
        });
    }),
    (WR360.by.oe = function ($elements, proxy) {
      (proxy = void 0 === proxy ? "" : ".proxy" + proxy),
        $elements.each(function () {
          jQuery(this).unbind("touchstart" + proxy),
            jQuery(this).unbind("click" + proxy);
        });
    }),
    (WR360.by.mZ = function () {
      try {
        return window.self !== window.top;
      } catch (e) {
        return !0;
      }
    }),
    (WR360.by.lf = function () {
      return !!(
        /iPad|iPhone|iPod/.test(navigator.platform) ||
        /Android/.test(navigator.userAgent) ||
        (/Mac/.test(navigator.userAgent) &&
          navigator.maxTouchPoints &&
          1 < navigator.maxTouchPoints)
      );
    }),
    (WR360.by.fU = WR360.by.lf()),
    (WR360.by.cz = function (string, defaultValue) {
      return string && 0 != string.length ? string : defaultValue;
    }),
    (WR360.by.dM = function (string, defaultValue) {
      return string && 0 != string.length ? parseFloat(string) : defaultValue;
    }),
    (WR360.by.je = function (string, defaultValue) {
      return string && 0 != string.length
        ? parseFloat(string.replace(",", "."))
        : defaultValue;
    }),
    (WR360.by.bX = function (string, defaultValue) {
      return string && 0 != string.length
        ? "true" == string.toLowerCase() || "1" == string.toLowerCase()
        : defaultValue;
    }),
    (WR360.by.ge = function () {
      for (
        var charCode, jd = "", mq = 10 + parseInt(10 * Math.random()), i = 0;
        i < mq;
        i++
      )
        (charCode = 97 + parseInt(26 * Math.random())),
          (jd += String.fromCharCode(charCode));
      return jd;
    }),
    (WR360.by.qk = function () {
      var hL;
      1 != document.ad.msie &&
        (/Trident\/7\./.test(navigator.userAgent)
          ? ((document.ad.version = "99"),
            (document.ad.msie = !0),
            (document.ad.webkit = !1),
            (document.ad.mozilla = !1),
            (document.ad.opera = !1))
          : ((document.ad.sa = /(android)/i.test(navigator.userAgent)),
            1 == document.ad.sa &&
              ((hL = navigator.userAgent),
              (document.ad.rY = -1 < hL.indexOf("Chrome")),
              0 == document.ad.rY) &&
              (document.ad.sO =
                -1 < hL.indexOf("Mozilla/5.0") &&
                -1 < hL.indexOf("AppleWebKit"))));
    }),
    (WR360.by.mG = function () {
      var ug, browser;
      jQuery.uaMatch ||
        (jQuery.uaMatch = function (ua) {
          ua = ua.toLowerCase();
          ua =
            /(chrome)[ \/]([\w.]+)/.exec(ua) ||
            /(webkit)[ \/]([\w.]+)/.exec(ua) ||
            /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) ||
            /(msie) ([\w.]+)/.exec(ua) ||
            (ua.indexOf("compatible") < 0 &&
              /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua)) ||
            [];
          return { browser: ua[1] || "", version: ua[2] || "0" };
        }),
        (browser = {}),
        (ug = jQuery.uaMatch(navigator.userAgent)).browser &&
          ((browser[ug.browser] = !0), (browser.version = ug.version)),
        browser.chrome
          ? (browser.webkit = !0)
          : browser.webkit && (browser.safari = !0),
        (document.ad = browser),
        WR360.by.qk();
    }),
    (WR360.by.fS = function (e) {
      var rA,
        fw = 0,
        gI = 0;
      return 1 ==
        (void 0 !== e.originalEvent &&
          void 0 !== e.originalEvent.targetTouches) &&
        null != e.originalEvent.targetTouches &&
        0 < e.originalEvent.targetTouches.length
        ? {
            x: (fw = e.originalEvent.targetTouches[0].pageX),
            y: (gI = e.originalEvent.targetTouches[0].pageY),
          }
        : ((rA =
            void 0 !== window.event && void 0 !== window.event.targetTouches),
          0 == WR360.by.fU && 0 == rA
            ? (e.pageX || e.pageY
                ? ((fw = e.pageX), (gI = e.pageY))
                : (e.clientX || e.clientY) &&
                  ((fw =
                    e.clientX +
                    document.body.scrollLeft +
                    document.documentElement.scrollLeft),
                  (gI =
                    e.clientY +
                    document.body.scrollTop +
                    document.documentElement.scrollTop)),
              { x: fw, y: gI })
            : 1 == rA &&
              null != window.event.targetTouches &&
              0 < window.event.targetTouches.length
            ? {
                x: (fw = window.event.targetTouches[0].pageX),
                y: (gI = window.event.targetTouches[0].pageY),
              }
            : { x: fw, y: gI });
    }),
    (WR360.by.pe = function (qv, dX) {
      "svg" === qv.slice(-3) &&
        (document.body.appendChild(dX),
        (dX.width = dX.offsetWidth),
        (dX.height = dX.offsetHeight),
        document.body.removeChild(dX));
    }),
    (WR360.by.fA = function (cu, eJ) {
      var y, x2, x;
      return cu.hasClass("clip_indicator")
        ? cu.is(":hover")
        : ((x = cu.offset().left),
          (y = cu.offset().top),
          (x2 = x + cu.outerWidth(!1)),
          (cu = y + cu.outerHeight(!1)),
          x <= (x = Math.abs(eJ.x)) && x <= x2 && eJ.y >= y && eJ.y <= cu);
    }),
    (WR360.by.pA = function () {
      var ajaxLocation = "";
      try {
        ajaxLocation = location.href;
      } catch (e) {
        ((ajaxLocation = document.createElement("a")).href = ""),
          (ajaxLocation = ajaxLocation.href);
      }
      ajaxLocation =
        /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/.exec(
          ajaxLocation.toLowerCase()
        ) || [];
      return /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(
        ajaxLocation[1]
      );
    }),
    (WR360.J = function () {
      this.dr = new Array();
    }),
    (WR360.J.prototype.iS = function (item) {
      for (var result = -1, i = 0; i < this.dr.length; i++)
        if (this.dr[i] == item) {
          result = i;
          break;
        }
      return result;
    }),
    (WR360.J.prototype.bk = function (item) {
      var result = !1;
      return null != item && (this.dr.push(item), (result = !0)), result;
    }),
    (WR360.J.prototype.removeItem = function (item) {
      var result = !1,
        item = this.iS(item);
      return -1 < item && (this.dr.splice(item, 1), (result = !0)), result;
    }),
    (WR360.J.prototype.clear = function () {
      this.dr = new Array();
    }),
    (WR360.J.prototype.contains = function (item) {
      return -1 < this.iS(item);
    }),
    (WR360.J.prototype.mh = function (index) {
      return this.dr[index];
    }),
    (WR360.J.prototype.ds = function () {
      return this.dr.length;
    }),
    (WR360.J.prototype.nz = function () {
      return 0 == this.dr.length;
    }),
    (WR360.gl = function () {
      (this.settings = new WR360.kT()),
        (this.bF = new Array()),
        (this.hi = new Array()),
        (this.aw = new Array()),
        (this.ky = new Array()),
        (this.aw.ep = 0),
        (this.aw.eU = 0),
        (this.aw.rows = 1);
    }),
    (WR360.gl.prototype.iq = function () {
      return 0 < this.aw.ep && 0 < this.aw.eU;
    }),
    (WR360.gl.prototype.ly = function () {
      for (var dj = 0; dj < this.bF.length; dj++) {
        var cd = this.bF[dj];
        if (0 == cd.disabled && cd.renderMode != WR360.kc.bf.au) return !0;
      }
      return !1;
    }),
    (WR360.Control = function () {
      (this.gp = 0.12),
        (this.inBrowserFullScreen = !1),
        (this.disableMouseControl = !1),
        (this.iu = !1),
        (this.doubleClickFullscreen = !1),
        (this.mouseHoverDrag = !1),
        (this.mouseWheelDrag = !1),
        (this.mouseWheelDragZoomOnly = !1),
        (this.qc = !0),
        (this.hideHotspotsOnLoad = !1),
        (this.hideHotspotsOnZoom = !0),
        (this.rowSensitivity = 15),
        (this.dragSensitivity = 10),
        (this.zoomSteps = 1),
        (this.zoomSpeed = 300),
        (this.maxZoom = 100),
        (this.centerZoom = !1),
        (this.allowPanX = !0),
        (this.allowPanY = !0),
        (this.allowRotateInputInZoom = !1),
        (this.singleClickZooms = !1),
        (this.pauseOnPreload = !1),
        (this.resumePreloadOnHover = !1),
        (this.dragAcceleration = 1),
        (this.responsiveBaseWidth = 0);
    }),
    (WR360.uH = function (step) {
      var isStepObject = "object" == typeof step,
        isStepSpeed = !isNaN(step),
        stepObj = isStepObject ? step : {};
      (this.speed = isStepObject ? stepObj.speed : isStepSpeed ? step : 2),
        (this.direction = stepObj.direction || 0),
        (this.activateHotspot = stepObj.activateHotspot || !1),
        (this.hotspotTriggerDelay = stepObj.hotspotTriggerDelay || 0),
        (this.disableDrag = stepObj.disableDrag || !1),
        (this.resetZoom = stepObj.resetZoom || !1),
        (this.zoomOutSpeed = stepObj.zoomOutSpeed || 400),
        (this.zoomToHotspot = stepObj.zoomToHotspot || !1),
        (this.zoomInSpeed = stepObj.zoomInSpeed || 400),
        (this.keyHotspot = stepObj.keyHotspot || null),
        isStepSpeed || isStepObject || this.parse(step);
    }),
    (WR360.uH.prototype.parse = function (step) {
      if (step)
        for (var stepParts = step.split(","), i = 0; i < stepParts.length; i++)
          switch (i) {
            case 0:
              this.speed = WR360.by.dM(stepParts[i], this.speed);
              break;
            case 1:
              this.direction = WR360.by.dM(stepParts[i], this.direction);
              break;
            case 2:
              this.disableDrag = !!WR360.by.dM(stepParts[i], this.disableDrag);
              break;
            case 3:
              this.resetZoom = !!WR360.by.dM(stepParts[i], this.resetZoom);
              break;
            case 4:
              this.zoomOutSpeed = WR360.by.dM(stepParts[i], this.zoomOutSpeed);
              break;
            case 5:
              this.keyHotspot = WR360.by.cz(stepParts[i], this.keyHotspot);
              break;
            case 6:
              this.activateHotspot = !!WR360.by.dM(
                stepParts[i],
                this.activateHotspot
              );
              break;
            case 7:
              this.hotspotTriggerDelay = WR360.by.dM(
                stepParts[i],
                this.hotspotTriggerDelay
              );
              break;
            case 8:
              this.zoomToHotspot = !!WR360.by.dM(
                stepParts[i],
                this.zoomToHotspot
              );
              break;
            case 9:
              this.zoomInSpeed = WR360.by.dM(stepParts[i], this.zoomInSpeed);
          }
    }),
    (WR360.Link = function () {
      (this.color = "#AAAAAA"),
        (this.opacity = 0.5),
        (this.width = 1),
        (this.uG = 0),
        (this.tP = 0),
        (this.align = 5),
        (this.parsed = !1);
    }),
    (WR360.Link.prototype.parse = function (uR) {
      if (uR) {
        var tX = uR.split(",");
        this.parsed = 0 < tX.length;
        for (var i = 0; i < tX.length; i++)
          switch (i) {
            case 0:
              this.color = WR360.by.cz(tX[i], this.color);
              break;
            case 1:
              this.opacity = WR360.by.je(tX[i], this.opacity);
              break;
            case 2:
              this.width = WR360.by.dM(tX[i], this.width);
              break;
            case 3:
              this.uG = WR360.by.dM(tX[i], this.uG);
              break;
            case 4:
              this.tP = WR360.by.dM(tX[i], this.tP);
              break;
            case 5:
              this.align = WR360.by.dM(tX[i], this.align);
          }
      }
    }),
    (WR360.Clip = function () {
      (this.x = 0), (this.y = 0), (this.width = 0), (this.height = 0);
    }),
    (WR360.Clip.prototype.parse = function (clipString) {
      if (clipString) {
        var clipParts = clipString.split(",");
        this.parsed = 0 < clipParts.length;
        for (var i = 0; i < clipParts.length; i++)
          switch (i) {
            case 0:
              this.x = WR360.by.dM(clipParts[i], this.x);
              break;
            case 1:
              this.y = WR360.by.dM(clipParts[i], this.y);
              break;
            case 2:
              this.width = WR360.by.dM(clipParts[i], this.width);
              break;
            case 3:
              this.height = WR360.by.dM(clipParts[i], this.height);
          }
      }
    }),
    (WR360.ClipStyle = function () {
      (this.backColor = "#fff"),
        (this.backOpacity = 0),
        (this.backColorHover = "#eee"),
        (this.backOpacityHover = 0.5);
    }),
    (WR360.ClipStyle.prototype.parse = function (styleString) {
      if (styleString) {
        var styleParts = styleString.split(",");
        this.parsed = 0 < styleParts.length;
        for (var i = 0; i < styleParts.length; i++)
          switch (i) {
            case 0:
              this.backColor = WR360.by.cz(styleParts[i], this.backColor);
              break;
            case 1:
              this.backOpacity = WR360.by.dM(styleParts[i], this.opacity);
              break;
            case 2:
              this.backColorHover = WR360.by.cz(
                styleParts[i],
                this.hoverBackColor
              );
              break;
            case 3:
              this.backOpacityHover = WR360.by.dM(
                styleParts[i],
                this.hoverOpacity
              );
          }
      }
    }),
    (WR360.Margin = function () {
      (this.top = 0), (this.right = 0), (this.bottom = 0), (this.left = 0);
    }),
    (WR360.Margin.prototype.parse = function (fG) {
      if (null != fG && 0 != fG.length)
        for (var aj = fG.split(","), i = 0; i < aj.length; i++)
          switch (i) {
            case 0:
              this.top = WR360.by.dM(aj[i], this.top);
              break;
            case 1:
              this.right = WR360.by.dM(aj[i], this.right);
              break;
            case 2:
              this.bottom = WR360.by.dM(aj[i], this.bottom);
              break;
            case 3:
              this.left = WR360.by.dM(aj[i], this.left);
          }
    }),
    (WR360.Align = function () {
      (this.vertical = WR360.Align.TOP),
        (this.horizontal = WR360.Align.LEFT),
        (this.parsed = !1);
    }),
    (WR360.Align.TOP = -1),
    (WR360.Align.CENTER = 0),
    (WR360.Align.BOTTOM = 1),
    (WR360.Align.LEFT = -1),
    (WR360.Align.CENTER = 0),
    (WR360.Align.RIGHT = 1),
    (WR360.Align.prototype.pn = function () {
      return (
        this.vertical == WR360.Align.CENTER &&
        this.horizontal == WR360.Align.CENTER
      );
    }),
    (WR360.Align.prototype.parse = function (bK) {
      if (null != bK && 0 != bK.length) {
        var gP = bK.split(",");
        this.parsed = 0 < gP.length;
        for (var i = 0; i < gP.length; i++)
          switch (i) {
            case 0:
              var verticalAlign = gP[i].toLowerCase().trim();
              "top" == verticalAlign || "-1" == verticalAlign
                ? (this.vertical = WR360.Align.TOP)
                : "center" == verticalAlign || "0" == verticalAlign
                ? (this.vertical = WR360.Align.CENTER)
                : ("bottom" != verticalAlign && "1" != verticalAlign) ||
                  (this.vertical = WR360.Align.BOTTOM);
              break;
            case 1:
              verticalAlign = gP[i].toLowerCase().trim();
              "left" == verticalAlign || "-1" == verticalAlign
                ? (this.horizontal = WR360.Align.LEFT)
                : "center" == verticalAlign || "0" == verticalAlign
                ? (this.horizontal = WR360.Align.CENTER)
                : ("right" != verticalAlign && "1" != verticalAlign) ||
                  (this.horizontal = WR360.Align.RIGHT);
          }
      }
    }),
    (WR360.ix = function () {
      (this.x = 0),
        (this.y = 0),
        (this.isXDefined = !1),
        (this.isYDefined = !1);
    }),
    (WR360.ix.prototype.ot = function () {
      return this.isXDefined || this.isYDefined;
    }),
    (WR360.ix.prototype.parse = function (offsetX, offsetY) {
      (this.isXDefined = null != offsetX && 0 < offsetX.length),
        (this.isYDefined = null != offsetY && 0 < offsetY.length),
        (this.x = WR360.by.dM(offsetX, this.x)),
        (this.y = WR360.by.dM(offsetY, this.y));
    }),
    (WR360.kc = function () {
      (this.id = ""),
        (this.type = ""),
        (this.indicatorImage = null),
        (this.disabled = !1),
        (this.hotspotInfo = null),
        (this.offset = new WR360.ix()),
        (this.margin = new WR360.Margin()),
        (this.align = new WR360.Align()),
        (this.clipStyle = new WR360.ClipStyle()),
        (this.wrap = !0),
        (this.renderMode = WR360.kc.bf.aC),
        (this.activateOnClick = !1),
        (this.deactivateOnClick = !1),
        (this.effects = ""),
        (this.minIndicatorScale = 100),
        (this.alwaysActive = 0),
        (this.contentFadeIn = 300),
        (this.contentFadeOut = 200),
        (this.dummy = !1);
    }),
    (WR360.kc.uc = {}),
    (WR360.kc.uc.tL = 1),
    (WR360.kc.uc.uD = 2),
    (WR360.kc.bf = {}),
    (WR360.kc.bf.aC = 0),
    (WR360.kc.bf.io = 1),
    (WR360.kc.bf.au = 2),
    (WR360.kc.bf.kd = 3),
    (WR360.HotspotInfo = function () {
      (this.src = ""),
        (this.clickAction = WR360.HotspotInfo.iE.NONE),
        (this.clickData = ""),
        (this.clickDataParam = ""),
        (this.url = ""),
        (this.urlTarget = "_self"),
        (this.txt = ""),
        (this.txtWidth = 242),
        (this.txtColor = "#525B69"),
        (this.txtBkColor = "#FFFFFF"),
        (this.fntHeight = 14),
        (this.css = ""),
        (this.cdata = ""),
        (this.imgWidth = 0),
        (this.imgWidthMin = 0),
        (this.imgBkColor = "transparent"),
        (this.lbxShowClose = !0),
        (this.lbxBackCover = !1),
        (this.lbxClickActive = !0),
        (this.imgNoScale = !1),
        (this.lbxPosition = ""),
        (this.lbxCloseColor = ""),
        (this.link = new WR360.Link());
    }),
    (WR360.HotspotInfo.iE = {}),
    (WR360.HotspotInfo.iE.NONE = 0),
    (WR360.HotspotInfo.iE.qq = 1),
    (WR360.HotspotInfo.iE.mA = 2),
    (WR360.HotspotInfo.iE.qx = 3),
    (WR360.HotspotInfo.iE.sL = 4),
    (WR360.HotspotInfo.iE.ss = 5),
    (WR360.HotspotInfo.iE.rH = 6),
    (WR360.HotspotInfo.iE.qP = 7),
    (WR360.HotspotInfo.iE.pB = 8),
    (WR360.HotspotInfo.iE.sr = 9),
    (WR360.HotspotInfo.iE.sX = 10),
    (WR360.HotspotInfo.iE.er = 11),
    (WR360.HotspotInfo.iE.uC = 12),
    (WR360.HotspotInfo.iE.ACTIVATE_HOTSPOT = 13),
    (WR360.lv = function () {
      (this.src = ""),
        (this.label = ""),
        (this.delay = 0),
        (this.bF = new Array()),
        (this.hi = new Array()),
        (this.cS = null);
    }),
    (WR360.lq = function () {
      (this.source = ""),
        (this.offsetX = 0),
        (this.offsetY = 0),
        (this.clip = new WR360.Clip()),
        (this.clipPoints = []);
    }),
    (WR360.nu = function () {
      this.image = "first";
    }),
    (WR360.jJ = function () {
      (this.fE = 0),
        (this.rotate = "false"),
        (this.kC = -1),
        (this.forceDirection = !1),
        (this.gg = 7),
        (this.spinOnPageScroll = !1),
        (this.pageScrollPeriod = 3),
        (this.pageScrollDelay = 300),
        (this.pageScrollFollow = !1),
        (this.bounce = !1),
        (this.bounceRows = !0),
        (this.useInertia = !0),
        (this.autoPlayOnDragRelease = !1),
        (this.inertiaRelToDragSpeed = !0),
        (this.inertiaTimeToStop = 700),
        (this.inertiaMaxInterval = 120),
        (this.flipHorizontalInput = !1),
        (this.flipVerticalInput = !1),
        (this.rowsOnSingleIndex = !1),
        (this.flipAxis = !1),
        (this.label = null);
    }),
    (WR360.kT = function () {
      (this.eH = new WR360.nu()),
        (this.bI = new WR360.jH()),
        (this.control = new WR360.Control()),
        (this.rotation = new WR360.jJ());
    }),
    (WR360.jH = function () {
      (this.hb = !0),
        (this.gj = !0),
        (this.gw = !0),
        (this.iT = !0),
        (this.bY = !0),
        (this.iU = !0),
        (this.bz = !0),
        (this.showProgressBar = !0),
        (this.showProgressPulse = !1),
        (this.gx = 0),
        (this.toolbarPosition = 0),
        (this.gH = "#ffffff"),
        (this.iC = 0.9),
        (this.gX = 0.9),
        (this.fullScreenBackColor = "#ffffff"),
        (this.showFullScreenToolbar = !1),
        (this.showToolbarOnLoadStart = !1),
        (this.customCursorClass = ""),
        (this.viewerHint = ""),
        (this.toolbarAutohide = !1),
        (this.skin = "");
    }),
    (WR360.kB = function () {
      this.src = "";
    }),
    (WR360.dh = function () {
      this.dw = {};
    }),
    (WR360.dh.prototype = {
      constructor: WR360.dh,
      oK: function () {
        return null;
      },
      addEventListener: function (type, cc, param) {
        void 0 === this.dw[type] && (this.dw[type] = []),
          this.dw[type].push({ cc: cc, param: param });
      },
      dispatchEvent: function (event) {
        if (
          ((event = "string" == typeof event ? { type: event } : event)
            .target || (event.target = this),
          !event.type)
        )
          throw new Error("Event object missing 'type' property.");
        var handled = !1;
        if (this.dw[event.type] instanceof Array)
          for (
            var cs = this.dw[event.type], i = 0, ia = cs.length;
            i < ia;
            i++
          ) {
            var ret = cs[i].cc.call(this, event, cs[i].param);
            void 0 !== ret && 1 == ret && (handled = !0);
          }
        return handled;
      },
      removeEventListener: function (type, cc) {
        if (this.dw[type] instanceof Array)
          for (var cs = this.dw[type], i = 0, ia = cs.length; i < ia; i++)
            if (cs[i].cc === cc) {
              cs.splice(i, 1);
              break;
            }
      },
    }),
    (WR360.Event = function (type, bubbles, cancelable, param) {
      (this.type = type),
        (this.bubbles = bubbles),
        (this.cancelable = cancelable),
        (this.param = param);
    }),
    (WR360.dY = function () {
      this.aB().constructor.call(this), (this.cQ = !1), (this.rootPath = "");
    }),
    WR360.dY.aK(WR360.dh),
    (WR360.dY.prototype.Init = function (rootPath, V) {
      (this.rootPath = rootPath), (this.cQ = !1);
    }),
    (WR360.ba = function (image, index, rootPath, graphicsPath, oq) {
      if ((this.aB().constructor.call(this), null == image))
        throw new Error("ImageObject.ctor. null == hotspot");
      (this.image = image),
        (this.F = new Image()),
        (this.bG = null),
        (this.index = index),
        (this.rootPath = rootPath),
        (this.graphicsPath = graphicsPath),
        (this.oq = oq),
        ((this.F.be = this).F.onload = this.gm),
        (this.F.onerror = this.gc),
        this.aA();
    }),
    WR360.ba.aK(WR360.dh),
    (WR360.ba.iK = "pixel.png"),
    (WR360.ba.prototype.aA = function () {
      (this.bG = new Image()),
        ((this.bG.be = this).bG.cQ = !1),
        (this.bG.onload = this.lQ),
        (this.bG.onerror = this.lL),
        (this.bG.onabort = this.lG);
    }),
    (WR360.ba.prototype.gm = function () {
      var bu = this.be;
      bu.dispatchEvent(
        new WR360.ah(WR360.ah.COMPLETE, !0, !1, bu, !1, bu.index, !0, "")
      );
    }),
    (WR360.ba.prototype.gc = function () {
      var bu = this.be;
      bu.dispatchEvent(
        new WR360.ah(
          WR360.ah.ERROR,
          !0,
          !1,
          bu,
          !1,
          bu.index,
          !1,
          "Error loading image: " + this.src
        )
      );
    }),
    (WR360.ba.prototype.lQ = function () {
      var bu = this.be;
      bu.hx(this) ||
        ((this.cQ = !0),
        bu.dispatchEvent(
          new WR360.ah(WR360.ah.eD, !0, !1, bu, !0, bu.index, !0, "")
        ));
    }),
    (WR360.ba.prototype.lL = function () {
      var bu = this.be;
      bu.hx(this) ||
        bu.dispatchEvent(
          new WR360.ah(
            WR360.ah.dU,
            !0,
            !1,
            bu,
            !0,
            bu.index,
            !1,
            "Error loading high-res image: " + this.src
          )
        );
    }),
    (WR360.ba.prototype.lG = function () {
      var bu = this.be;
      bu.hx(this) ||
        bu.dispatchEvent(
          new WR360.ah(
            WR360.ah.fD,
            !0,
            !1,
            bu,
            !0,
            bu.index,
            !1,
            "Abort loading high-res image: " + this.src
          )
        );
    }),
    (WR360.ba.prototype.hx = function (image) {
      return -1 != image.src.indexOf(WR360.ba.iK);
    }),
    (WR360.ba.prototype.Load = function () {
      var qv = (this.oq ? this.image.cS : this.image).src;
      this.F.src = this.rootPath + qv;
    }),
    (WR360.ba.prototype.hS = function () {
      null == this.bG && this.aA(),
        (this.bG.src = this.rootPath + this.image.cS.src);
    }),
    (WR360.ba.prototype.aE = function () {
      null != this.bG && this.hK();
    }),
    (WR360.ba.prototype.hK = function () {
      if (null == this.bG)
        throw new Error("forceUnloadHighRes: highresBitmapLoader==null");
      (this.bG.cQ = !1), (this.bG.src = this.graphicsPath + "/" + WR360.ba.iK);
    }),
    (WR360.ba.prototype.kz = function () {
      null != this.bG && 0 != this.bG.cQ && this.hK();
    }),
    (WR360.ah = function (
      type,
      bubbles,
      cancelable,
      af,
      ht,
      index,
      success,
      errorMessage
    ) {
      this.aB().constructor.call(this, type, bubbles, cancelable),
        (this.af = af),
        (this.ht = ht),
        (this.index = index),
        (this.success = success),
        (this.errorMessage = errorMessage);
    }),
    WR360.ah.aK(WR360.Event),
    (WR360.ah.COMPLETE = "ImageObject_complete"),
    (WR360.ah.ERROR = "ImageObject_error"),
    (WR360.ah.eD = "ImageObject_Highres_complete"),
    (WR360.ah.fD = "ImageObject_Highres_abort"),
    (WR360.ah.dU = "ImageObject_Highres_error"),
    (WR360.fC = function (bi, index, rootPath) {
      this.aB().constructor.call(this),
        (this.bi = bi),
        (this.index = index),
        (this.F = new Image()),
        (this.rootPath = rootPath),
        ((this.F.be = this).F.onload = this.gm),
        (this.F.onerror = this.gc),
        (this.isImageContentMode = 0 < this.bi.hotspotInfo.src.length),
        (this.qD = []),
        (this.qW = !this.isImageContentMode && this.uV());
    }),
    WR360.fC.aK(WR360.dh),
    (WR360.fC.Events = {}),
    (WR360.fC.Events.ud = "HOTSPOT_API_CLICK_ACTION"),
    (WR360.da = function (
      type,
      bubbles,
      cancelable,
      aO,
      index,
      success,
      errorMessage
    ) {
      this.aB().constructor.call(this, type, bubbles, cancelable),
        (this.aO = aO),
        (this.index = index),
        (this.success = success),
        (this.errorMessage = errorMessage);
    }),
    WR360.da.aK(WR360.Event),
    (WR360.da.COMPLETE = "HotspotObject_complete"),
    (WR360.da.ERROR = "HotspotObject_error"),
    (WR360.fC.prototype.gm = function () {
      var image = this,
        handler = this.be;
      setTimeout(
        function () {
          document.ad.msie && WR360.by.pe(image.src, image),
            handler.dispatchEvent(
              new WR360.da(
                WR360.da.COMPLETE,
                !0,
                !1,
                handler,
                handler.index,
                !0,
                ""
              )
            );
        },
        document.ad.msie ? 100 : 0
      );
    }),
    (WR360.fC.prototype.gc = function () {
      var bu = this.be;
      bu.dispatchEvent(
        new WR360.da(
          WR360.da.ERROR,
          !0,
          !1,
          bu,
          bu.index,
          !1,
          "Error loading image: " + this.src
        )
      );
    }),
    (WR360.fC.prototype.Load = function () {
      this.F.src = this.qW
        ? this.qD[0]
        : this.rootPath + this.bi.hotspotInfo.src;
    }),
    (WR360.fC.prototype.ny = function (url) {
      url = url.substr(url.lastIndexOf(".") + 1);
      return url && "xml" === url.toLowerCase();
    }),
    (WR360.fC.prototype.lT = function () {
      return (
        this.bi.hotspotInfo.url &&
        "_blank" == this.bi.hotspotInfo.urlTarget &&
        !this.ny(this.bi.hotspotInfo.url)
      );
    }),
    (WR360.fC.prototype.js = function () {
      return (
        this.bi.hotspotInfo.clickAction != WR360.HotspotInfo.iE.NONE ||
        0 < this.bi.hotspotInfo.url.length
      );
    }),
    (WR360.fC.prototype.gL = function () {
      return (
        0 < this.bi.hotspotInfo.cdata.length ||
        0 < this.F.src.length ||
        0 < this.bi.hotspotInfo.txt.length
      );
    }),
    (WR360.fC.prototype.ea = function (scale) {
      var maxWidth =
        0 != this.bi.hotspotInfo.imgWidth
          ? this.bi.hotspotInfo.imgWidth
          : this.F.width;
      return (maxWidth =
        scale < 1 && (maxWidth *= scale) < this.bi.hotspotInfo.imgWidthMin
          ? this.bi.hotspotInfo.imgWidthMin
          : maxWidth);
    }),
    (WR360.fC.prototype.kv = function (imagerotator, aM) {
      var bO = !1;
      switch (this.bi.hotspotInfo.clickAction) {
        case WR360.HotspotInfo.iE.sX:
          imagerotator.pY ? imagerotator.cJ() : imagerotator.gJ(), (bO = !0);
          break;
        case WR360.HotspotInfo.iE.qq:
          imagerotator.cJ(), imagerotator.gJ(), (bO = !0);
          break;
        case WR360.HotspotInfo.iE.mA:
          imagerotator.cJ(), (bO = !0);
          break;
        case WR360.HotspotInfo.iE.qx:
          imagerotator.cJ(), imagerotator.bV.iG(1), (bO = !0);
          break;
        case WR360.HotspotInfo.iE.sL:
          imagerotator.cJ(), imagerotator.bV.iG(-1), (bO = !0);
          break;
        case WR360.HotspotInfo.iE.ss:
          imagerotator.bV.qB(
            this.bi.hotspotInfo.clickData,
            new WR360.uH(this.bi.hotspotInfo.clickDataParam)
          ),
            (bO = !0);
          break;
        case WR360.HotspotInfo.iE.rH:
          imagerotator.cJ(),
            imagerotator.bV.qo(this.bi.hotspotInfo.clickData),
            (bO = !0);
          break;
        case WR360.HotspotInfo.iE.qP:
          imagerotator.mf(), (bO = !0);
          break;
        case WR360.HotspotInfo.iE.pB:
          imagerotator.mt(), (bO = !0);
          break;
        case WR360.HotspotInfo.iE.sr:
          imagerotator.rc(null), (bO = !0);
          break;
        case WR360.HotspotInfo.iE.uC:
          imagerotator.tZ(imagerotator.dn ? 0 : 100, aM), (bO = !0);
          break;
        case WR360.HotspotInfo.iE.ACTIVATE_HOTSPOT:
          imagerotator.bV.uO(
            this.bi.hotspotInfo.clickData,
            parseInt(this.bi.hotspotInfo.clickDataParam)
          ),
            (bO = !0);
          break;
        case WR360.HotspotInfo.iE.er:
          var mE = this.bi.hotspotInfo.clickData;
          0 < mE.length &&
            "function" == typeof (mE = window[mE]) &&
            (mE(this.bi), (bO = !0));
      }
      return bO;
    }),
    (WR360.fC.prototype.cv = function (imagerotator, aM) {
      var url,
        bO = !1;
      if (1 == this.dispatchEvent(new WR360.Event(WR360.fC.Events.ud, !1, !1)))
        bO = !0;
      else if (1 == this.js()) {
        if (this.bi.hotspotInfo.clickAction == WR360.HotspotInfo.iE.NONE)
          return (
            (url = this.bi.hotspotInfo.url),
            1 == imagerotator.gD() && imagerotator.sm.Event(WR360.sY.rU.rR),
            this.ny(url)
              ? imagerotator.reload(url, imagerotator.settings.rootPath)
              : (url = window.open(url, this.bi.hotspotInfo.urlTarget)) &&
                url.focus(),
            !0
          );
        bO = this.kv(imagerotator, aM);
      }
      return (
        1 == bO &&
          1 == imagerotator.gD() &&
          imagerotator.sm.Event(WR360.sY.rU.rR),
        !1
      );
    }),
    (WR360.fC.prototype.uV = function () {
      var img,
        textContent = this.bi.hotspotInfo.cdata || this.bi.hotspotInfo.txt,
        imgRex = /<img.*?src="(.*?)"/g;
      if (!textContent) return !1;
      for (; null !== (img = imgRex.exec(textContent)); ) this.qD.push(img[1]);
      return 0 < this.qD.length;
    }),
    (WR360.cL = function (bh) {
      if ((this.aB().constructor.call(this), null == bh))
        throw new Error("ImagePreloader: imageRotator is null");
      (this.image = null), (this.bh = bh);
    }),
    WR360.cL.aK(WR360.dY),
    (WR360.cL.le = "first"),
    (WR360.cL.la = "none"),
    (WR360.cL.prototype.Load = function (rootPath, V) {
      this.ct.Init.call(this, rootPath, V);
      var rootPath = V.settings.eH.image,
        av = void 0 !== this.bh.qQ && this.bh.qQ(),
        qI = this.bh.settings.fullScreenOnClick;
      if (av) {
        if (0 == V.aw.length)
          return void this.dispatchEvent(
            new WR360.cO(WR360.cO.COMPLETE, !0, !1, null, !0, "")
          );
        qI =
          1 == qI || 1 == V.settings.rotation.rowsOnSingleIndex
            ? parseInt(V.settings.rotation.fE)
            : this.bh.pH.bV.ob(!0);
        (qI < 0 || qI > V.aw.length - 1) && (qI = 0),
          (rootPath = V.aw[qI].src),
          av &&
            V.settings.control.qc &&
            this.bh.bV.lc &&
            (rootPath = (null != V.aw[qI].cS ? V.aw[qI].cS : V.aw[qI]).src);
      } else if (1 == this.bh.dV && 0 <= this.bh.reloadImageIndex) {
        av = this.bh.reloadImageIndex;
        0 < this.bh.reloadRowIndex &&
          ((qI = V.aw.length / V.aw.rows),
          (av = this.bh.reloadRowIndex * qI + av)),
          av > V.aw.length - 1 && (av = 0),
          (rootPath = V.aw[av].src);
      } else if (
        0 == V.settings.eH.image.length ||
        V.settings.eH.image.toLowerCase() == WR360.cL.la
      )
        return void this.dispatchEvent(
          new WR360.cO(WR360.cO.COMPLETE, !0, !1, null, !0, "")
        );
      (this.image = new Image()),
        ((this.image.be = this).image.onload = this.os),
        (this.image.onerror = this.mj),
        (this.image.src = this.rootPath + rootPath);
    }),
    (WR360.cL.prototype.os = function () {
      this.be.dispatchEvent(
        new WR360.cO(WR360.cO.COMPLETE, !0, !1, this.be.image, !0, "")
      );
    }),
    (WR360.cL.prototype.mj = function () {
      this.be.dispatchEvent(
        new WR360.cO(
          WR360.cO.ERROR,
          !0,
          !1,
          null,
          !1,
          "Preloader IO ERROR: " + this.src
        )
      );
    }),
    (WR360.cO = function (
      type,
      bubbles,
      cancelable,
      image,
      success,
      errorMessage
    ) {
      this.aB().constructor.call(this, type, bubbles, cancelable),
        (this.image = image),
        (this.success = success),
        (this.errorMessage = errorMessage);
    }),
    WR360.cO.aK(WR360.Event),
    (WR360.cO.COMPLETE = "complete"),
    (WR360.cO.ERROR = "error"),
    (WR360.dP = function (cR) {
      this.aB().constructor.call(this),
        (this.aw = new Array()),
        (this.sU = new Array()),
        (this.rd = 0),
        (this.ty = 0),
        (this.cG = 0),
        (this.cR = cR),
        (this.mu = "cache_" + cR.substr(1, cR.length));
    }),
    WR360.dP.aK(WR360.dY),
    (WR360.dP.prototype.lU = function (row) {
      return row > this.sU.length && (row = 0), this.sU[row];
    }),
    (WR360.dP.prototype.sd = function () {
      return this.sU.length;
    }),
    (WR360.dP.prototype.sM = function () {
      return this.rd;
    }),
    (WR360.dP.prototype.rr = function () {
      return this.aw.length;
    }),
    (WR360.dP.prototype.Init = function (rootPath, graphicsPath, V, oq) {
      this.ct.Init.call(this, rootPath, V),
        this.uT(rootPath, graphicsPath, V, oq);
    }),
    (WR360.dP.prototype.uT = function (rootPath, graphicsPath, V, oq) {
      (this.rd = V.aw.length / V.aw.rows),
        this.rd % 1 && ((this.rd = V.aw.length), (V.aw.rows = 1));
      for (var row = 0; row < V.aw.rows; row++) this.sU[row] = new Array();
      for (var sK = 1, sl = 0, i = 0; i < V.aw.length; i++) {
        i >= sK * this.rd && (sK++, (sl = 0));
        var af = new WR360.ba(V.aw[i], sl, rootPath, graphicsPath, oq);
        (this.aw[i] = af),
          (this.sU[sK - 1][sl++] = af),
          V.settings.rotation.fE == i && (this.ty = sK - 1);
      }
    }),
    (WR360.dP.prototype.kE = function () {
      for (var i = (this.cG = 0); i < this.aw.length; i++) {
        var af = this.aw[i];
        0 <= af.image.src.indexOf("dummy.png")
          ? this.kA({ ht: !1, af: af })
          : ((af.be = this),
            af.addEventListener(WR360.ah.COMPLETE, this.nU),
            af.addEventListener(WR360.ah.ERROR, this.ou),
            af.Load());
      }
    }),
    (WR360.dP.prototype.nU = function (e) {
      this.be.kA(e);
    }),
    (WR360.dP.prototype.kA = function (e) {
      var eR;
      e.ht ||
        (this.cG++,
        (eR = WR360.cf.PROGRESS),
        this.cG >= this.aw.length && ((eR = WR360.cf.COMPLETE), (this.cQ = !0)),
        this.dispatchEvent(
          new WR360.cf(
            eR,
            !0,
            !1,
            e.af,
            Math.round((100 * this.cG) / this.aw.length),
            !0,
            ""
          )
        ));
    }),
    (WR360.dP.prototype.ou = function (e) {
      var bu = this.be;
      bu.dispatchEvent(
        new WR360.cf(
          WR360.cf.ERROR,
          !0,
          !1,
          e.af,
          Math.round((100 * bu.cG) / bu.aw.length),
          !1,
          e.errorMessage
        )
      );
    }),
    (WR360.cf = function (
      type,
      bubbles,
      cancelable,
      af,
      ee,
      success,
      errorMessage
    ) {
      this.aB().constructor.call(this, type, bubbles, cancelable),
        (this.af = af),
        (this.ee = ee),
        (this.errorMessage = errorMessage),
        (this.success = success);
    }),
    WR360.cf.aK(WR360.Event),
    (WR360.cf.PROGRESS = "ImagesCache_progress"),
    (WR360.cf.COMPLETE = "ImagesCache_complete"),
    (WR360.cf.ERROR = "ImagesCache_error"),
    (WR360.cf.bJ = "ImagesCache_canceled"),
    (WR360.dc = function () {
      this.aB().constructor.call(this),
        (this.dH = 0),
        (this.bF = []),
        (this.hu = -1);
    }),
    WR360.dc.aK(WR360.dY),
    (WR360.dc.prototype.Init = function (rootPath, V) {
      this.ct.Init.call(this, rootPath, V), this.ku(rootPath, V);
    }),
    (WR360.dc.prototype.ku = function (rootPath, V) {
      for (var eW = 0, i = 0; i < V.bF.length; i++)
        V.bF[i].disabled ||
          ((-1 === this.hu || eW < this.hu) &&
            (this.bF[eW] = new WR360.fC(V.bF[i], eW, rootPath)),
          eW++);
    }),
    (WR360.dc.prototype.kD = function () {
      for (var i = (this.dH = 0); i < this.bF.length; i++) {
        var aO = this.bF[i];
        aO.isImageContentMode || aO.qW
          ? ((aO.be = this),
            aO.addEventListener(WR360.da.COMPLETE, this.mN),
            aO.addEventListener(WR360.da.ERROR, this.og),
            aO.Load())
          : this.kq(
              new WR360.da(WR360.da.COMPLETE, !0, !1, aO, aO.index, !0, "")
            );
      }
    }),
    (WR360.dc.prototype.mN = function (e) {
      this.be.kq(e);
    }),
    (WR360.dc.prototype.kq = function (e) {
      this.dH++;
      var eR = WR360.dK.PROGRESS;
      this.dH >= this.bF.length && ((eR = WR360.dK.COMPLETE), (this.cQ = !0)),
        this.dispatchEvent(
          new WR360.dK(
            eR,
            !0,
            !1,
            e.aO,
            Math.round((100 * this.dH) / this.bF.length),
            !0,
            ""
          )
        );
    }),
    (WR360.dc.prototype.og = function (e) {
      var bu = this.be;
      bu.dispatchEvent(
        new WR360.dK(
          WR360.dK.ERROR,
          !0,
          !1,
          e.aO,
          Math.round((100 * bu.dH) / bu.bF.length),
          !1,
          e.errorMessage
        )
      );
    }),
    (WR360.dK = function (
      type,
      bubbles,
      cancelable,
      aO,
      ee,
      success,
      errorMessage
    ) {
      this.aB().constructor.call(this, type, bubbles, cancelable),
        (this.aO = aO),
        (this.ee = ee),
        (this.errorMessage = errorMessage),
        (this.success = success);
    }),
    WR360.dK.aK(WR360.Event),
    (WR360.dK.PROGRESS = "HotspotsCache_progress"),
    (WR360.dK.COMPLETE = "HotspotsCache_complete"),
    (WR360.dK.ERROR = "HotspotsCache_error"),
    (WR360.dK.bJ = "HotspotsCache_canceled"),
    (WR360.cI = function (visible, aO, bV, H) {
      (this.df = visible),
        (this.dz = 0),
        (this.dg = 0),
        (this.aO = aO),
        (this.bV = bV),
        (this.bh = bV.bh),
        (this.playing = !1),
        (this.H = H);
    }),
    (WR360.cI.prototype.cD = function () {
      this.fR();
    }),
    (WR360.cI.prototype.aH = function (visible) {}),
    (WR360.cI.prototype.tz = function (visible, uk) {}),
    (WR360.cI.prototype.uv = function (x, y) {
      (this.dz = x), (this.dg = y);
    }),
    (WR360.cI.prototype.nT = function () {
      var aM;
      null != this.bH &&
        ((aM = this.bV.oy(this.aO, this.bH.qh, this.bH.qw)),
        (this.dz = aM.x),
        (this.dg = aM.y),
        this.bH.gM.css("left", this.dz),
        this.bH.gM.css("top", this.dg),
        null != this.bH.image) &&
        0 == this.aO.bi.hotspotInfo.imgNoScale &&
        this.bH.gM.css("width", this.aO.ea(this.bV.lB));
    }),
    (WR360.cI.prototype.fR = function () {
      null == this.bH &&
        this.aO.gL() &&
        ((this.bH = new WR360.bx(this.bV, this.aO, this.H)),
        this.bH.jw(),
        this.bH.jl(this.gV()));
    }),
    (WR360.cI.prototype.gV = function () {
      return { x: this.dz, y: this.dg };
    }),
    (WR360.cI.prototype.pM = function () {
      null != this.bH && this.bH.delete();
    }),
    (WR360.aT = function (visible, aO, bV, H) {
      this.aB().constructor.call(this),
        (this.df = visible),
        (this.dz = 0),
        (this.dg = 0),
        (this.clip = null),
        (this.aO = aO),
        (this.bV = bV),
        (this.bh = bV.bh),
        (this.dW = !1),
        (this.H = H),
        (this.bb = null),
        (this.image = new Image()),
        (this.bH = null),
        (this.fc = !1),
        (this.gB = 0),
        (this.gE = 0),
        (this.pl = "indicator_active " + this.aO.bi.id + "_indicator_active"),
        (this.image.onload = jQuery.proxy(this.nK, this)),
        (this.image.onerror = jQuery.proxy(this.nY, this)),
        (this.hotspotHtmlId = this.bh.gK(this.aO.bi)),
        (this.cb = 0),
        (this.kn = 0),
        (this.isClip = this.aO.bi.clipStyle.parsed),
        (this.jP = jQuery.proxy(this.jP, this)),
        (this.mC = jQuery.proxy(this.mC, this)),
        (this.uS = jQuery.proxy(this.uS, this)),
        this.kG(),
        this.aO.bi.indicatorImage &&
          (this.image.src =
            this.bh.settings.graphicsPath + "/" + this.aO.bi.indicatorImage),
        this.aH(visible);
    }),
    WR360.aT.aK(WR360.dh),
    (WR360.aT.Events = {}),
    (WR360.aT.Events.tn = "HOTSPOT_API_ACTIVATE"),
    (WR360.aT.Events.uo = "HOTSPOT_API_DEACTIVATE"),
    (WR360.aT.Events.mI = "HOTSPOT_ROLLOVER_REMOVED"),
    (WR360.aT.prototype.kG = function () {
      var self = this,
        baseClass = "hotspot_indicator ",
        isSelfUrl =
          (this.isClip && (baseClass += "clip_indicator "),
          this.aO.lT() && (!this.aO.gL() || !this.aO.bi.activateOnClick));
      (this.bb = (
        isSelfUrl
          ? jQuery(
              "<a style='position:absolute' class='" +
                baseClass +
                this.aO.bi.id +
                "_indicator wr360hotspot_" +
                this.bh.oY +
                "' id='" +
                this.hotspotHtmlId +
                "' href='" +
                this.aO.bi.hotspotInfo.url +
                "' target='" +
                this.aO.bi.hotspotInfo.urlTarget +
                "'/>"
            )
          : jQuery(
              "<div style='position:absolute' class='" +
                baseClass +
                this.aO.bi.id +
                "_indicator wr360hotspot_" +
                this.bh.oY +
                "' id='" +
                this.hotspotHtmlId +
                "'/>"
            )
      ).appendTo(this.H)),
        this.aO.bi.effects &&
          ((baseClass = {
            class:
              "indicator_effect_" +
              (baseClass = this.aO.bi.effects.split(","))[0],
            duration: baseClass[1] || null,
            stopOnActivation: baseClass[2] || !1,
          }).duration &&
            this.bb[0].style.setProperty(
              "--anim-duration",
              baseClass.duration + "ms"
            ),
          this.bb.addClass(baseClass.class),
          (this.aO.bi.parsedEffect = baseClass)),
        this.aO.bi.dummy && this.bb.addClass("indicator_dummy"),
        this.aO.bi.alwaysActive ||
          (this.bb.mouseover(
            jQuery.proxy(function (event) {
              this.OnMouseOver(event);
            }, this)
          ),
          this.bb.mouseout(
            jQuery.proxy(function (event) {
              this.OnMouseOut(event);
            }, this)
          )),
        isSelfUrl
          ? this.bb.click(function () {
              self.bh.gD() && self.bh.sm.Event(WR360.sY.rU.rR);
            })
          : WR360.by.fI(
              this.bb,
              jQuery.proxy(function (event) {
                return this.kf(event);
              }, this)
            ),
        this.bh.addEventListener(WR360.Events.hG, this.mC),
        this.bh.addEventListener(WR360.ImageRotator.Events.un, this.uS),
        this.bb.bind("touchend mousedown", function (e) {
          e.stopPropagation(), self.bh.jB(e);
        });
    }),
    (WR360.aT.prototype.nK = function (e) {
      var image = e.target,
        self = this;
      setTimeout(
        function () {
          document.ad.msie && WR360.by.pe(self.aO.bi.indicatorImage, image),
            self.uv(self.dz, self.dg);
          var uW = self.nC(image);
          self.bb.css({
            "background-image": "url(" + image.src + ")",
            width: uW.width,
            height: uW.height,
            "background-size": "contain",
          });
        },
        document.ad.msie ? 100 : 0
      );
    }),
    (WR360.aT.prototype.nY = function (e) {
      WR360.bZ.gA(
        "DynamicHotspotPresenter. Error loading image: " + e.target.src
      );
    }),
    (WR360.aT.prototype.cD = function () {}),
    (WR360.aT.prototype.aH = function (visible, aX) {
      (this.df = visible)
        ? aX
          ? this.bb.fadeIn(300)
          : this.bb.show()
        : aX
        ? this.bb.fadeOut(300)
        : this.bb.hide();
    }),
    (WR360.aT.prototype.uS = function () {
      this.bH && this.bH.tx(!1);
    }),
    (WR360.aT.prototype.tz = function (visible, uk) {
      this.aO.bi.alwaysActive &&
        (visible || (!uk && this.aO.bi.alwaysActive == WR360.kc.uc.uD)
          ? (this.uy(), this.bH && this.bH.tx(visible))
          : (this.gY(!0), this.bH && this.bH.tx(!1)));
    }),
    (WR360.aT.prototype.SetClip = function (coord, size, points) {
      var pointIdx,
        polygon = "polygon(";
      for (pointIdx in points)
        var eJ = points[pointIdx],
          polygon = (polygon += eJ.x + "% ") + (eJ.y + "%,");
      (polygon = polygon.slice(0, -1)), (polygon += ")");
      var scaledSize = this.bV.GetPolySize(size.width, size.height),
        clipStyle = this.aO.bi.clipStyle,
        hotspotElm =
          (this.bb.css({
            "clip-path": polygon,
            width: scaledSize.width,
            height: scaledSize.height,
            left: coord.scaleX,
            top: coord.scaleY,
            "background-color": clipStyle.backColor,
            opacity: clipStyle.backOpacity,
          }),
          this.bb[0]),
        hotspotElm =
          (hotspotElm.style.setProperty(
            "--back-color-hover",
            clipStyle.backColorHover
          ),
          hotspotElm.style.setProperty(
            "--back-opacity-hover",
            clipStyle.backOpacityHover
          ),
          this.getClipCentroid(points));
      (hotspotElm.x = (hotspotElm.x * size.width) / 100),
        (hotspotElm.y = (hotspotElm.y * size.height) / 100),
        (hotspotElm.x =
          (hotspotElm.x * scaledSize.width) / size.width + coord.scaleX),
        (hotspotElm.y =
          (hotspotElm.y * scaledSize.height) / size.height + coord.scaleY),
        (this.clip = { centroid: hotspotElm });
    }),
    (WR360.aT.prototype.uv = function (x, y) {
      (this.dz = x), (this.dg = y);
      var uW = this.nC();
      this.bb.css({
        left: x - uW.width / 2,
        top: y - uW.height / 2,
        width: uW.width,
        height: uW.height,
      });
    }),
    (WR360.aT.prototype.mC = function (e) {
      (this.aO.bi.alwaysActive && "toggle" !== e.param) ||
        (e.param != this.hotspotHtmlId && this.gY("toggle" === e.param));
    }),
    (WR360.aT.prototype.OnMouseOut = function (e) {
      e.stopPropagation(), (this.fc = !1);
    }),
    (WR360.aT.prototype.OnMouseOver = function (e) {
      1 != this.bh.pY &&
        (e.stopPropagation(),
        e.preventDefault(),
        0 == this.aO.bi.activateOnClick) &&
        1 == this.fR() &&
        (this.gE = Date.now());
    }),
    (WR360.aT.prototype.kf = function (e) {
      if (this.aO.bi.alwaysActive)
        this.aO.js() && this.aO.cv(this.bh, this.gV());
      else {
        if (0 == this.aO.bi.activateOnClick) {
          if (Date.now() - this.gE < 150) return;
          this.gE = 0;
        }
        if (1 == this.aO.js())
          if (
            0 == this.aO.gL() ||
            (0 == this.aO.bi.activateOnClick && 1 == this.dW)
          )
            return (
              0 == this.aO.gL() &&
                this.bh.dispatchEvent(
                  new WR360.Event(WR360.Events.hG, !1, !1, this.hotspotHtmlId)
                ),
              void (
                0 == this.aO.cv(this.bh, this.gV()) &&
                1 == this.dW &&
                this.gY(!1)
              )
            );
        (this.fc = !1), 1 == this.dW ? this.gY(!1) : this.fR();
      }
    }),
    (WR360.aT.prototype.jP = function (e) {
      var lM;
      clearInterval(this.gB),
        clearTimeout(this.kn),
        clearTimeout(this.cb),
        (this.cb = 0),
        this.bb.removeClass(this.pl),
        this.dW &&
          ((this.dW = !1),
          e.param || this.ld(),
          this.aO.bi.activateOnClick ||
            WR360.by.fU ||
            (0 == (e = { x: this.bh.dO, y: this.bh.ei }).x && 0 == e.y) ||
            (WR360.by.fA(this.bb, e) &&
              ((this.fc = !0),
              ((lM = this).gB = setInterval(function () {
                lM.lb();
              }, 200)))));
    }),
    (WR360.aT.prototype.eb = function (timeout, hZ) {
      var self;
      this.fR(timeout, !0),
        void 0 === timeout ||
          this.cb ||
          ((self = this).cb = setTimeout(function () {
            self.gY(!0), void 0 !== hZ && hZ(self.mv());
          }, timeout));
    }),
    (WR360.aT.prototype.fR = function (timeout, qp) {
      var effect = this.aO.bi.parsedEffect;
      return (
        effect && effect.stopOnActivation && this.bb.removeClass(effect.class),
        !(
          (this.bh.fu && !qp) ||
          this.dW ||
          this.fc ||
          (this.bh.dispatchEvent(
            new WR360.Event(WR360.Events.hG, !1, !1, this.hotspotHtmlId)
          ),
          this.bh.cJ(),
          (this.dW = !0),
          this.bh.lp(),
          this.bb.addClass(this.pl),
          this.ll() || !this.aO.gL()
            ? (this.oX(timeout), 1)
            : (this.bH ||
                ((this.bH = new (
                  this.aO.bi.renderMode == WR360.kc.bf.kd ? WR360.fH : WR360.bx
                )(this.bV, this.aO, this.H)),
                this.bH.addEventListener(WR360.aT.Events.mI, this.jP),
                this.bH.jw()),
              this.bH.jl(this.gV()),
              this.oX(timeout),
              0))
        )
      );
    }),
    (WR360.aT.prototype.uy = function () {
      this.aO.gL() &&
        (null == this.bH
          ? ((this.bH = new WR360.bx(this.bV, this.aO, this.H)),
            this.bH.jw(),
            this.bH.jl(this.gV()),
            (this.dW = !0))
          : this.bH.jl(this.gV()));
    }),
    (WR360.aT.prototype.ll = function () {
      return this.dispatchEvent(new WR360.Event(WR360.aT.Events.tn, !1, !1));
    }),
    (WR360.aT.prototype.ld = function () {
      return this.dispatchEvent(new WR360.Event(WR360.aT.Events.uo, !1, !1));
    }),
    (WR360.aT.prototype.gY = function (aX) {
      clearInterval(this.gB),
        clearTimeout(this.cb),
        (this.cb = 0),
        clearTimeout(this.kn),
        this.bb.removeClass(this.pl),
        0 != this.dW &&
          (1 == this.ld()
            ? (this.dW = !1)
            : null != this.bH && this.bH.cN(aX, !0));
    }),
    (WR360.aT.prototype.gV = function () {
      return this.clip ? this.clip.centroid : { x: this.dz, y: this.dg };
    }),
    (WR360.aT.prototype.getClipCentroid = function (points) {
      var idx,
        x0 = points[0].x,
        y0 = points[0].y,
        x = 0,
        y = 0,
        twiceArea = 0,
        prev = points[points.length - 1];
      for (idx in points) {
        var next = points[idx],
          x1 = prev.x - x0,
          y1 = prev.y - y0,
          x2 = next.x - x0,
          y2 = next.y - y0,
          a = x1 * y2 - x2 * y1;
        (twiceArea += a),
          (x += (x1 + x2) * a),
          (y += (y1 + y2) * a),
          (prev = next);
      }
      var factor = 3 * twiceArea;
      return { x: (x /= factor) + x0, y: (y /= factor) + y0 };
    }),
    (WR360.aT.prototype.oX = function (timeout) {
      var self;
      1 != WR360.by.fU &&
        (clearInterval(this.gB),
        (timeout = void 0 !== timeout ? timeout : 0),
        1 != (self = this).aO.bi.deactivateOnClick || 0 != timeout) &&
        (this.kn = setTimeout(function () {
          self.gB = setInterval(function () {
            self.jE();
          }, 300);
        }, timeout));
    }),
    (WR360.aT.prototype.jE = function () {
      var cV = this.bh.hA;
      (0 == cV.x && 0 == cV.y) ||
        0 != WR360.by.fA(this.bb, cV) ||
        (null != this.bH && 0 != this.bH.iI(cV)) ||
        (this.gY(!0), clearInterval(this.gB));
    }),
    (WR360.aT.prototype.lb = function () {
      var cV = { x: this.bh.dO, y: this.bh.ei };
      (0 == cV.x && 0 == cV.y) ||
        (0 == WR360.by.fA(this.bb, cV) &&
          ((this.fc = !1), clearInterval(this.gB), (this.gB = 0)));
    }),
    (WR360.aT.prototype.nT = function () {
      this.bH &&
        this.aO.bi.renderMode != WR360.kc.bf.kd &&
        (this.aO.bi.alwaysActive && this.bH.uU(this.gV()), this.bH.image) &&
        !this.aO.bi.hotspotInfo.imgNoScale &&
        this.bH.gM.css("width", this.aO.ea(this.bV.lB));
    }),
    (WR360.aT.prototype.mv = function () {
      return {
        hotspotHtmlId: this.hotspotHtmlId,
        parentContainer: this.H,
        hotspotConfig: this.aO.bi,
        coordX: this.dz,
        coordY: this.dg,
        isVisible: this.df,
      };
    }),
    (WR360.aT.prototype.pM = function () {
      this.bb.unbind(),
        this.bb.remove(),
        null != this.bH &&
          (this.bH.removeEventListener(WR360.aT.Events.mI, this.jP),
          this.bH.delete()),
        clearInterval(this.gB),
        clearTimeout(this.cb),
        clearTimeout(this.kn),
        this.bh.removeEventListener(WR360.Events.hG, this.mC),
        this.bh.removeEventListener(WR360.ImageRotator.Events.un, this.uS),
        (this.bV = null),
        (this.bh = null);
    }),
    (WR360.aT.prototype.pZ = function (isHide) {
      var ps = "hotspot_indicator_hidden";
      1 == isHide ? this.bb.addClass(ps) : this.bb.removeClass(ps);
    }),
    (WR360.aT.prototype.vb = function () {
      this.aO.cv(this.bh, this.gV());
    }),
    (WR360.aT.prototype.nC = function (image) {
      image = image || this.image;
      var scale = this.aO.bi.minIndicatorScale,
        lB = this.bh.lB;
      if (!scale || 100 <= scale || 1 <= lB)
        return { width: image.width, height: image.height };
      var width = image.width * lB,
        lB = image.height * lB;
      if (0 < this.bh.dC) {
        var totalSteps = this.bh.bA.settings.control.zoomSteps;
        if (1 == totalSteps)
          return { width: image.width, height: image.height };
        (width += ((image.width - width) / totalSteps) * this.bh.dC),
          (lB += ((image.height - lB) / totalSteps) * this.bh.dC);
      }
      var changeRatio,
        totalSteps = image.width * (scale /= 100),
        scale = image.height * scale;
      return (
        lB <= width
          ? width < totalSteps &&
            ((changeRatio = totalSteps / image.width),
            (width = totalSteps),
            (lB = image.height * changeRatio))
          : lB < scale &&
            ((changeRatio = scale / image.height),
            (lB = scale),
            (width = image.width * changeRatio)),
        { width: width, height: lB }
      );
    }),
    (WR360.bx = function (bV, aO, H) {
      this.aB().constructor.call(this),
        (this.bV = bV),
        (this.bh = bV.bh),
        (this.H = H),
        (this.ig = WR360.by.ge()),
        (this.dv = null),
        (this.bg = null),
        (this.tO = null),
        (this.ut = null),
        (this.gM = null),
        (this.image = null),
        (this.qh = 0),
        (this.qw = 0),
        (this.aO = aO),
        (this.hotspotInfo = aO.bi.hotspotInfo),
        (this.renderMode = aO.bi.renderMode),
        (this.sT = 0),
        (this.bP = 5),
        (this.visible = !1),
        (this.iA = new Array()),
        (this.jp = !1),
        (this.cU = null),
        this.hotspotInfo.link.parsed &&
          ((this.bg = jQuery(
            "<div class='indicator_link_wrap " + this.aO.bi.id + "_link'/>"
          ).appendTo(this.H)),
          (this.tO = jQuery("<div class='indicator_link'/>").appendTo(this.bg)),
          (this.ut = jQuery("<div class='indicator_link'/>").appendTo(
            this.bg
          ))),
        (this.dv = jQuery(
          "<div class='hotspot_rollover position_rollover " +
            this.aO.bi.id +
            "_rollover wr360rollover_" +
            this.bh.oY +
            "' id='" +
            this.ig +
            "'/>"
        ).appendTo(this.H));
    }),
    WR360.bx.aK(WR360.dh),
    (WR360.bx.prototype.tx = function (visible, aX, duration) {
      this.bg &&
        (visible
          ? aX
            ? this.bg.fadeIn(duration)
            : this.bg.show()
          : this.bg.hide());
    }),
    (WR360.bx.prototype.nc = function (visible) {
      visible ? this.dv.show() : this.dv.hide(),
        this.tx(visible),
        (this.visible = visible);
    }),
    (WR360.bx.prototype.mc = function (visible, duration, hZ) {
      visible ? this.dv.fadeIn(duration, hZ) : this.dv.fadeOut(duration, hZ),
        this.tx(visible, !0, duration + 100),
        (this.visible = visible);
    }),
    (WR360.bx.prototype.iI = function (eJ) {
      return 0 != this.visible && WR360.by.fA(this.gM, eJ);
    }),
    (WR360.bx.prototype.iL = function () {
      var bn,
        self,
        hY,
        ig = WR360.by.ge();
      this.hotspotInfo.cdata
        ? ((this.gM = jQuery(
            this.rm("<div class='hotspot_cdata' id='" + ig + "'/>")
          ).appendTo(this.dv)),
          this.gM.append(this.hotspotInfo.cdata),
          (bn = this).gM.find("iframe").each(function () {
            bn.iA.push(jQuery(this).attr("src"));
          }))
        : this.aO.isImageContentMode
        ? ((hY = 0 == this.hotspotInfo.imgNoScale ? this.bV.lB : 1),
          (this.gM = jQuery(this.rm("<div id='" + ig + "'/>")).appendTo(
            this.dv
          )),
          this.gM.css({
            width: this.aO.ea(hY),
            "background-color": this.hotspotInfo.imgBkColor,
          }),
          (this.image = jQuery(
            "<img style='display:block;width:100%;' src='" +
              this.aO.F.src +
              "'/>"
          ).appendTo(this.gM)))
        : this.hotspotInfo.txt &&
          ((this.gM = jQuery(this.rm("<div id='" + ig + "'/>")).appendTo(
            this.dv
          )),
          this.kr(this.gM),
          this.gM.html(this.hotspotInfo.txt.nA())),
        this.gM.css("position", "relative"),
        (this.hotspotInfo.cdata || this.hotspotInfo.txt) &&
          (this.aO.lT() ||
            (self = this).gM.find("a").each(function () {
              self.subscribeToClickEvents(jQuery(this));
            }),
          0 < (hY = this.gM.find(".hotspotPopupCloseButton")).length) &&
          (WR360.by.fI(
            hY,
            jQuery.proxy(function (event) {
              this.vg(event);
            }, this)
          ),
          (this.jp = !0));
    }),
    (WR360.bx.prototype.subscribeToClickEvents = function (elm) {
      var self = this;
      elm.click(function (e) {
        elm.attr("href") || e.preventDefault(e),
          self.bh.gD() && self.bh.sm.Event(WR360.sY.rU.rR);
      });
    }),
    (WR360.bx.prototype.rm = function (html) {
      return (html = this.aO.lT()
        ? html.replace(
            "div",
            "a href='" +
              this.hotspotInfo.url +
              "' target='" +
              this.hotspotInfo.urlTarget +
              "'"
          )
        : html);
    }),
    (WR360.bx.prototype.kr = function (dR) {
      this.hotspotInfo.css
        ? dR.attr("style", this.hotspotInfo.css)
        : dR.css({
            "font-family": "Arial",
            width: this.hotspotInfo.txtWidth + "px",
            color: this.hotspotInfo.txtColor,
            "background-color": this.hotspotInfo.txtBkColor,
            "font-size": this.hotspotInfo.fntHeight + "px",
            border: "1px #eeeeee solid",
            padding: "6px 8px 10px 8px",
          });
    }),
    (WR360.bx.prototype.jw = function () {
      var aM;
      this.iL(),
        (this.qh = this.dv.outerWidth()),
        (this.qw = this.dv.outerHeight()),
        this.renderMode != WR360.kc.bf.aC
          ? ((aM = this.bV.oy(this.aO, this.qh, this.qw)),
            this.gM.css({ left: aM.x, top: aM.y }))
          : (this.gM.css({ left: -this.qh / 2, top: -this.qw / 2 }),
            this.hotspotInfo.cdata &&
              this.gM.css({ width: this.qh, height: this.qw })),
        this.dv.css({ width: 0, height: 0 }),
        this.nc(!1),
        this.dv.css("visibility", "visible");
    }),
    (WR360.bx.prototype.lm = function (e) {
      jQuery(e.target).attr("href") ||
        (e.stopPropagation(),
        this.aO.lT()
          ? 1 == this.bh.gD() && this.bh.sm.Event(WR360.sY.rU.rR)
          : this.jp ||
            (e.preventDefault(),
            (e = this.aO.cv(this.bh, this.cU)),
            this.renderMode === WR360.kc.bf.au) ||
            e ||
            this.aO.bi.alwaysActive ||
            this.cN(!0));
    }),
    (WR360.bx.prototype.vg = function (e) {
      e.stopPropagation(), this.renderMode != WR360.kc.bf.au && this.cN(!0);
    }),
    (WR360.bx.prototype.nR = function (it, ab) {
      var gd = 0,
        jj = ab / 2,
        margin = this.aO.bi.margin;
      switch (this.aO.bi.align.horizontal) {
        case WR360.Align.LEFT:
          gd = it - jj - margin.right;
          break;
        case WR360.Align.CENTER:
          gd = it - margin.right + margin.left;
          break;
        case WR360.Align.RIGHT:
          gd = it + jj + margin.left;
      }
      var lD,
        ca = jj + this.bP;
      return (gd =
        1 == this.aO.bi.wrap &&
        ((lD = this.H.css("width").gO()),
        gd - ca <= 0
          ? (gd = it + jj + margin.left)
          : lD <= gd + ca && (gd = it - jj - margin.right),
        gd - ca <= 0 || lD <= gd + ca)
          ? this.mi(it, ab)
          : gd);
    }),
    (WR360.bx.prototype.oi = function (gR, bq) {
      var ho = 0,
        hC = bq / 2,
        margin = this.aO.bi.margin;
      switch (this.aO.bi.align.vertical) {
        case WR360.Align.TOP:
          ho = gR - hC - margin.bottom;
          break;
        case WR360.Align.CENTER:
          ho = gR - margin.bottom + margin.top;
          break;
        case WR360.Align.BOTTOM:
          ho = gR + hC + margin.top;
      }
      var mQ,
        cE = hC + this.bP;
      return (ho =
        1 == this.aO.bi.wrap &&
        ((mQ = this.H.css("height").gO()),
        ho - cE <= 0
          ? (ho = gR + hC + margin.top)
          : mQ <= ho + cE && (ho = gR - hC - margin.bottom),
        ho - cE <= 0 || mQ <= ho + cE)
          ? this.mi(gR, bq)
          : ho);
    }),
    (WR360.bx.prototype.mi = function (it, ab) {
      var ab = ab / 2 + this.bP,
        lD = this.H.css("width").gO();
      if (1 == this.aO.bi.wrap) {
        if (lD <= it + ab) return lD - ab;
        if (it - ab <= 0) return ab;
      }
      return it;
    }),
    (WR360.bx.prototype.lF = function (gR, bq) {
      var bq = bq / 2 + this.bP,
        mQ = this.H.css("height").gO();
      if (1 == this.aO.bi.wrap) {
        if (mQ <= gR + bq) return mQ - bq;
        if (gR - bq <= 0) return bq;
      }
      return gR;
    }),
    (WR360.bx.prototype.tU = function () {
      var aM = this.bV.oy(this.aO, this.qh, this.qw);
      this.gM.css({ left: aM.x, top: aM.y }),
        this.bg && this.tI({ x: aM.x + this.qh / 2, y: aM.y + this.qw / 2 });
    }),
    (WR360.bx.prototype.uU = function (cU) {
      var ab, bq, kK, lg;
      (this.cU = cU),
        this.renderMode == WR360.kc.bf.io
          ? this.tU()
          : ((ab = this.qh),
            (bq = this.qw),
            null != this.image &&
              0 == this.hotspotInfo.imgNoScale &&
              ((bq =
                ((ab = this.aO.ea(this.bV.lB)) * this.aO.F.height) /
                this.aO.F.width),
              this.gM.css({ left: -ab / 2, top: -bq / 2 })),
            (kK = 0),
            (lg = 0),
            (lg =
              1 == this.aO.bi.align.parsed && 0 == this.aO.bi.align.pn()
                ? ((kK = this.nR(cU.x, ab)), this.oi(cU.y, bq))
                : ((kK = this.mi(cU.x, ab)), this.lF(cU.y, bq))),
            this.dv.css({ left: kK, top: lg }),
            this.bg && this.tI({ x: kK, y: lg }));
    }),
    (WR360.bx.prototype.tI = function (tK) {
      var link = this.hotspotInfo.link,
        eC = this.qh / 2,
        fv = this.qw / 2;
      switch (link.align) {
        case 1:
          (tK.x -= eC), (tK.y -= fv);
          break;
        case 2:
          tK.y -= fv;
          break;
        case 3:
          (tK.x += eC), (tK.y -= fv);
          break;
        case 4:
          tK.x -= eC;
          break;
        case 5:
          break;
        case 6:
          tK.x += eC;
          break;
        case 7:
          (tK.x -= eC), (tK.y += fv);
          break;
        case 8:
          tK.y += fv;
          break;
        case 9:
          (tK.x += eC), (tK.y += fv);
      }
      var tw = tK.x,
        tY = tK.y,
        uw = !0;
      if (link.uG)
        switch (link.align) {
          case 2:
            tY -= link.uG;
            break;
          case 4:
            tw -= link.uG;
            break;
          case 6:
            tw += link.uG;
            break;
          case 8:
            tY += link.uG;
            break;
          default:
            uw = !1;
        }
      var left,
        top,
        width,
        height,
        tM = tw - this.cU.x,
        tG = tY - this.cU.y,
        va = Math.sqrt(tM * tM + tG * tG),
        tG = Math.atan2(tG, tM);
      if (
        ((va -= link.tP),
        (tG = (180 * tG) / Math.PI + 180),
        this.tO.css({
          opacity: link.opacity,
          height: link.width,
          background: link.color,
          left: tw,
          top: tY,
          width: va,
          transform: "rotate(" + tG + "deg)",
          "-moz-transform": "rotate(" + tG + "deg)",
          "-webkit-transform": "rotate(" + tG + "deg)",
          "-o-transform:": "rotate(" + tG + "deg)",
          "-ms-transform": "rotate(" + tG + "deg)",
        }),
        uw)
      ) {
        switch (link.align) {
          case 2:
            (left = tK.x),
              (top = tK.y - link.uG),
              (width = link.width),
              (height = link.uG);
            break;
          case 4:
            (left = tK.x - link.uG),
              (top = tK.y),
              (width = link.uG),
              (height = link.width);
            break;
          case 6:
            (left = tK.x),
              (top = tK.y),
              (width = link.uG),
              (height = link.width);
            break;
          case 8:
            (left = tK.x),
              (top = tK.y),
              (width = link.width),
              (height = link.uG);
        }
        this.ut.css({
          opacity: link.opacity,
          height: height,
          background: link.color,
          left: left,
          top: top,
          width: width,
        });
      }
    }),
    (WR360.bx.prototype.jl = function (cU) {
      1 != this.visible &&
        (this.iZ(),
        this.renderMode != WR360.kc.bf.au && this.uU(cU),
        this.aO.bi.contentFadeIn
          ? this.mc(!0, this.aO.bi.contentFadeIn, jQuery.proxy(this.jm, this))
          : (this.nc(!0), this.jm()));
    }),
    (WR360.bx.prototype.cN = function (aX, aq) {
      0 != this.visible &&
        (aX && this.aO.bi.contentFadeOut
          ? this.mc(!1, this.aO.bi.contentFadeOut, jQuery.proxy(this.kk, this))
          : (this.nc(!1), this.kk()),
        this.dispatchEvent(
          new WR360.Event(
            WR360.aT.Events.mI,
            !1,
            !1,
            (aq = void 0 !== aq && aq)
          )
        ));
    }),
    (WR360.bx.prototype.iZ = function () {
      this.gM.unbind(),
        this.H.unbind("touchstart." + this.ig),
        this.H.unbind("mousedown." + this.ig);
    }),
    (WR360.bx.prototype.mx = function (e) {
      e.stopPropagation(),
        this.renderMode == WR360.kc.bf.au ||
          this.aO.bi.alwaysActive ||
          this.cN(!0);
    }),
    (WR360.bx.prototype.jm = function () {
      (this.renderMode != WR360.kc.bf.aC &&
        this.renderMode != WR360.kc.bf.io) ||
        (this.sT = Date.now()),
        this.gM.bind("mouseover", function (event) {
          event.stopPropagation();
        }),
        WR360.by.fU
          ? (this.gM.bind(
              "touchstart",
              jQuery.proxy(function (event) {
                this.lm(event);
              }, this)
            ),
            this.H.bind(
              "touchstart." + this.ig,
              jQuery.proxy(function (event) {
                this.mx(event);
              }, this)
            ))
          : (this.gM.bind(
              "mousedown",
              jQuery.proxy(function (event) {
                this.lm(event);
              }, this)
            ),
            this.H.bind(
              "mousedown." + this.ig,
              jQuery.proxy(function (event) {
                this.mx(event);
              }, this)
            ));
      var bn = this;
      this.gM.find("iframe").each(function (index) {
        var sS = jQuery(this).attr("src"),
          index = bn.iA[index];
        void 0 !== sS &&
          0 == sS.length &&
          void 0 !== index &&
          jQuery(this).attr("src", index);
      });
    }),
    (WR360.bx.prototype.kk = function () {
      (this.renderMode != WR360.kc.bf.aC &&
        this.renderMode != WR360.kc.bf.io) ||
        (0 != this.sT &&
          (1 == this.bh.gD() &&
            this.bh.sm.Event(WR360.sY.rU.te, Date.now() - this.sT),
          (this.sT = 0))),
        this.gM.find("iframe").each(function () {
          jQuery(this).attr("src", "");
        }),
        this.iZ();
    }),
    (WR360.bx.prototype.delete = function () {
      this.iZ(),
        this.bg && this.bg.remove(),
        this.dv.remove(),
        (this.bV = null),
        (this.bh = null);
    }),
    (WR360.jI = function (id, visible) {
      (this.Id = id), (this.Visible = visible);
    }),
    (WR360.cP = function (id, dF, cn) {
      (this.cj = !1),
        (this.df = !1),
        (this.id = id),
        (this.dF = dF),
        (this.cn = cn),
        (this.K = jQuery("#" + this.id));
    }),
    (WR360.cP.prototype.iW = function () {
      return this.cj;
    }),
    (WR360.cP.prototype.fi = function (fh) {
      this.cj != fh &&
        (this.cj
          ? this.K.attr("class", this.dF)
          : this.K.attr("class", this.cn),
        (this.cj = fh));
    }),
    (WR360.cP.prototype.aH = function (visible) {
      if (null == this.K) throw new Error("SetVisible: buttonElement==null.");
      (this.df = visible) ? this.K.show() : this.K.hide();
    }),
    (WR360.eI = function (id, cg, be, dF, ck, cn, cY, du) {
      this.aB().constructor.call(this, id, dF, cn),
        (this.jn = !1),
        (this.cg = cg),
        (this.ck = ck),
        (this.cY = cY),
        (this.du = du),
        (this.be = be),
        (this.dJ = 0),
        (this.pj = jQuery.proxy(this.ck, this.be)),
        (this.tm = jQuery.proxy(this.cY, this.be));
    }),
    WR360.eI.aK(WR360.cP),
    (WR360.eI.prototype.cD = function () {
      this.jn ||
        (this.K.bind(this.cg, jQuery.proxy(this.ck, this.be)), (this.jn = !0));
    }),
    (WR360.eI.prototype.ub = function () {
      this.K.unbind(),
        this.dJ && clearTimeout(this.dJ),
        (this.tm = null),
        (this.pj = null);
    }),
    (WR360.eI.prototype.fi = function (fh) {
      var lM;
      this.cj != fh &&
        (this.dJ && clearTimeout(this.dJ),
        (lM = this).cj
          ? (this.K.unbind(this.cg),
            this.K.attr("class", this.dF),
            0 == this.du
              ? this.K.bind(this.cg, this.pj)
              : (this.dJ = setTimeout(function () {
                  lM.lj();
                }, this.du)))
          : (this.K.unbind(this.cg),
            this.K.attr("class", this.cn),
            0 == this.du
              ? this.K.bind(this.cg, this.tm)
              : (this.dJ = setTimeout(function () {
                  lM.ka();
                }, this.du))),
        (this.cj = fh));
    }),
    (WR360.cP.prototype.ka = function () {
      this.K.bind(this.cg, this.tm);
    }),
    (WR360.cP.prototype.lj = function () {
      this.K.bind(this.cg, this.pj);
    }),
    (WR360.fb = function (id, cg, be, dF, ck, cn, cY, du) {
      this.aB().constructor.call(this, id, cg, be, dF, ck, cn, cY, du);
    }),
    WR360.fb.aK(WR360.eI),
    (WR360.fb.prototype.pb = function () {
      return this.iW();
    }),
    (WR360.fb.prototype.ji = function (playing) {
      this.fi(playing);
    }),
    (WR360.ej = function (id, dF, cn) {
      this.aB().constructor.call(this, id, dF, cn);
    }),
    WR360.ej.aK(WR360.cP),
    (WR360.ej.prototype.nM = function () {
      return this.iW();
    }),
    (WR360.ej.prototype.as = function (dn) {
      this.fi(dn);
    }),
    (WR360.bN = function () {
      (this.he = 1),
        (this.aF = -1),
        (this.kl = 0),
        (this.bU = null),
        (this.bB = null),
        (this.V = null),
        (this.es = 0),
        (this.fe = 0),
        (this.bh = null),
        (this.db = !0),
        (this.cA = null),
        (this.hz = null),
        (this.ce = null),
        (this.en = !1),
        (this.hw = !1),
        (this.cX = new WR360.J()),
        (this.aU = null),
        (this.dZ = 0),
        (this.jr = !0),
        (this.lc = !1),
        (this.H = null),
        (this.bd = null),
        (this.aG = null),
        (this.kL = null),
        (this.lB = 1),
        (this.qT = !1),
        (this.pJ = 0),
        (this.sn = 0),
        (this.ph = 0),
        (this.flippingToLowresOnZoomOut = !1),
        (this.xc = 2147483647);
    }),
    (WR360.bN.prototype.iF = function (bh, bd) {
      (this.bh = bh), (this.bd = bd), (this.aG = bd);
    }),
    (WR360.bN.prototype.cD = function (bU, bB, V, es, fe, aU, H) {
      (this.cA = new Array()),
        (this.hz = new Array()),
        (this.ce = new Array()),
        (this.bU = bU),
        (this.kl = bU.ty),
        (this.bB = bB),
        (this.V = V),
        (this.aU = aU),
        (this.H = H),
        (this.lB = this.bh.lB),
        (this.he = -1 == this.bh.bA.settings.rotation.kC ? 1 : -1),
        null != this.bh.pH &&
        "" == this.bh.pH.configFileFullScreenURL &&
        0 == this.bh.settings.fullScreenOnClick
          ? ((this.es = this.bh.pH.dG), (this.fe = this.bh.pH.dA))
          : ((this.es = es), (this.fe = fe)),
        this.V.settings.control.hideHotspotsOnLoad && (this.db = !1);
      for (var i = 0; i < this.bB.bF.length; i++) {
        var dj,
          ai,
          aO = this.bB.bF[i];
        1 != aO.bi.disabled &&
          ((dj = aO.bi.id),
          (ai = null),
          (ai = new (aO.bi.renderMode != WR360.kc.bf.au ? WR360.aT : WR360.cI)(
            !1,
            aO,
            this,
            this.H
          )),
          (this.cA[dj] = ai),
          (this.hz[dj] = this.ce[i] = new WR360.jI(dj, !0)),
          ai.cD());
      }
    }),
    (WR360.bN.prototype.oy = function (aO, width, height) {
      var hY,
        x = 0,
        y = 0,
        bi = aO.bi;
      if (
        (aO.isImageContentMode &&
          ((hY = 0 == aO.bi.hotspotInfo.imgNoScale ? this.lB : 1),
          (height = ((width = aO.ea(hY)) * aO.F.height) / aO.F.width)),
        bi.offset.ot())
      )
        return { x: bi.offset.x * this.lB, y: bi.offset.y * this.lB };
      switch (bi.align.horizontal) {
        case WR360.Align.LEFT:
          x = bi.margin.left;
          break;
        case WR360.Align.CENTER:
          x =
            bi.margin.left +
            (this.H.css("width").gO() -
              bi.margin.left -
              bi.margin.right -
              width) /
              2;
          break;
        case WR360.Align.RIGHT:
          x = this.H.css("width").gO() - bi.margin.right - width;
      }
      switch (bi.align.vertical) {
        case WR360.Align.TOP:
          y = bi.margin.top;
          break;
        case WR360.Align.CENTER:
          y =
            bi.margin.top +
            (this.H.css("height").gO() -
              bi.margin.top -
              bi.margin.bottom -
              height) /
              2;
          break;
        case WR360.Align.BOTTOM:
          y = this.H.css("height").gO() - bi.margin.bottom - height;
      }
      return { x: x, y: y };
    }),
    (WR360.bN.prototype.uK = function () {
      var sz = this.bU.sd();
      this.kl < sz - 1
        ? this.kl++
        : 0 == this.V.settings.rotation.bounceRows && (this.kl = 0),
        this.dE(this.aF, !0);
    }),
    (WR360.bN.prototype.ta = function () {
      var sz = this.bU.sd();
      0 < this.kl
        ? this.kl--
        : 0 == this.V.settings.rotation.bounceRows && (this.kl = sz - 1),
        this.dE(this.aF, !0);
    }),
    (WR360.bN.prototype.fo = function (jf) {
      var dir = this.V.settings.rotation.kC;
      return (
        this.V.settings.rotation.forceDirection
          ? (this.he = -1 === dir ? 1 : -1)
          : (this.he = -1 === dir ? -1 : 1),
        !this.tk() ||
          ((dir = this.qT ? -1 : this.he), jf && (dir *= jf), this.iG(dir))
      );
    }),
    (WR360.bN.prototype.eT = function (jf) {
      var dir = this.V.settings.rotation.kC;
      return (
        this.V.settings.rotation.forceDirection,
        (this.he = -1 === dir ? 1 : -1),
        !this.tk() ||
          ((dir = this.qT ? 1 : this.he), jf && (dir *= jf), this.iG(dir))
      );
    }),
    (WR360.bN.prototype.tk = function () {
      var af = this.bU.lU(this.kl)[this.aF];
      return 0 < af.image.delay && this.sn++ < af.image.delay
        ? (-1 !== this.bh.gQ && this.bh.gQ++, !1)
        : !(this.sn = 0);
    }),
    (WR360.bN.prototype.rE = function () {
      this.sn = 0;
    }),
    (WR360.bN.prototype.iG = function (jG) {
      return this.dE(this.aF + jG);
    }),
    (WR360.bN.prototype.qo = function (label) {
      if (!(void 0 === label || label.length <= 0)) {
        this.sn = 0;
        for (var sz = this.bU.sd(), sH = 0; sH < sz; sH++)
          for (var jq = this.bU.lU(sH), si = 0; si < jq.length; si++)
            if (jq[si].image.label.toLowerCase() == label.toLowerCase())
              return (this.kl = sH), this.dE(si);
      }
      return !1;
    }),
    (WR360.bN.prototype.qB = function (label, step, hZ) {
      if (!label || this.pJ) return !1;
      for (
        var self, onPlayFinish, sz = this.bU.sd(), rD = !1, sh = 0;
        sh < sz;
        sh++
      ) {
        for (var jq = this.bU.lU(sh), pO = 0; pO < jq.length; pO++)
          if (jq[pO].image.label.toLowerCase() === label.toLowerCase()) {
            rD = !0;
            break;
          }
        if (rD) break;
      }
      return (
        !!rD &&
        ((self = this),
        (onPlayFinish = function () {
          var aN;
          step.disableDrag && (self.bh.uI = !1),
            step.keyHotspot &&
              (step.zoomToHotspot
                ? ((aN =
                    (aN = self.cA[step.keyHotspot]) instanceof WR360.aT
                      ? aN.gV()
                      : null),
                  self.bh.tZ(self.xc, aN, step.zoomInSpeed, function () {
                    self.wc(step, pO, sh);
                  }))
                : self.wc(step, pO, sh)),
            "function" == typeof hZ && hZ(label);
        }),
        step.disableDrag && (this.bh.uI = !0),
        step.resetZoom
          ? this.bh.tZ(0, null, step.zoomOutSpeed, function () {
              self.pJ || (self.pJ = self.rF(step, pO, sh, onPlayFinish));
            })
          : (this.pJ = this.rF(step, pO, sh, onPlayFinish)),
        !0)
      );
    }),
    (WR360.bN.prototype.wc = function (step, pO, sh) {
      var self = this;
      step.activateHotspot
        ? this.uO(
            step.keyHotspot,
            step.hotspotTriggerDelay || self.xc,
            function () {
              step.hotspotTriggerDelay && self.vf(step.keyHotspot);
            }
          )
        : step.hotspotTriggerDelay &&
          setTimeout(function () {
            self.aF == pO && self.kl == sh && self.vf(step.keyHotspot);
          }, step.hotspotTriggerDelay);
    }),
    (WR360.bN.prototype.rF = function (step, pO, sh, hZ) {
      var jq, lh, self;
      return 0 === step.direction && pO === this.aF && sh === this.kl
        ? (hZ(), 0)
        : ((jq = this.bU.lU(this.kl)),
          (lh = !0),
          2 === step.direction
            ? (lh = !0)
            : 3 === step.direction
            ? (lh = !1)
            : ((lh =
                Math.abs(this.aF - pO) <= jq.length / 2
                  ? this.aF < pO
                  : this.aF > pO),
              1 === step.direction && (lh = !lh)),
          (self = this).bh.eg.ji(!0),
          (this.bh.pY = !0),
          setInterval(function () {
            (self.qT = !0),
              sh > self.kl ? self.uK() : sh < self.kl && self.ta(),
              lh ? self.eT() : self.fo(),
              (self.qT = !1),
              (self.bh.pY && (self.aF !== pO || self.kl !== sh)) ||
                (clearInterval(self.pJ),
                (self.pJ = 0),
                self.bh.eg.ji(!1),
                (self.bh.pY = !1),
                self.aF !== pO) ||
                self.kl !== sh ||
                hZ();
          }, (step.speed / jq.length) * 1e3));
    }),
    (WR360.bN.prototype.ob = function (nh) {
      return void 0 !== nh && 1 == nh
        ? this.aF + this.kl * this.bU.sM()
        : this.aF;
    }),
    (WR360.bN.prototype.lV = function (index) {
      var jq = this.bU.lU(this.kl),
        kj = !1;
      return (
        index < 0 && ((index = -index), (kj = !0)),
        index > jq.length - 1 && (index %= jq.length),
        (index = 0 < index && kj ? jq.length - index : index)
      );
    }),
    (WR360.bN.prototype.nk = function (index) {
      var jq = this.bU.lU(this.kl);
      if (!this.qT && this.V.settings.rotation.bounce) {
        if (index >= jq.length - 1) return jq.length - 1;
        if (index <= 0) return 0;
      }
      return this.lV(index);
    }),
    (WR360.bN.prototype.fK = function (bW, deltaX, deltaY) {
      var fL = this.bU.lU(this.kl)[bW].bG;
      null != fL && (this.hs(fL.src), this.eh(bW), (this.hw = !0));
    }),
    (WR360.bN.prototype.dE = function (index, isVertical) {
      var ic = this.aF,
        returnValue = !0;
      (this.aF = parseInt(this.nk(index))),
        0 <= ic && this.aF == ic && (returnValue = !1),
        this.bh.bA.settings.rotation.rowsOnSingleIndex &&
          ((index = parseInt(this.bh.bA.settings.rotation.fE)),
          this.kl != this.bU.ty) &&
          this.aF != index &&
          ((this.aF = index), (this.kl = this.bU.ty));
      ic = this.bU.lU(this.kl)[this.aF];
      return (
        this.en && null != ic.image.cS
          ? null != ic.bG && 1 == ic.bG.cQ
            ? (this.aS(null), this.fK(this.aF))
            : (this.aS(ic),
              this.cX.contains(ic) ||
                (this.cX.bk(ic),
                ic.addEventListener(WR360.ah.eD, jQuery.proxy(this.hm, this)),
                ic.addEventListener(WR360.ah.dU, jQuery.proxy(this.eK, this)),
                ic.addEventListener(WR360.ah.fD, jQuery.proxy(this.eK, this)),
                ic.hS(),
                null != ic.bG && 0 != ic.bG.cQ) ||
                this.bh.hc(!0),
              (null != ic.bG && 0 != ic.bG.cQ) || this.iM(this.aF, !0))
          : this.iM(this.aF, this.hw),
        this.bh.dispatchEvent(
          new WR360.Event(WR360.ImageRotator.Events.pP, !1, !1, {
            index: { image: this.aF, row: this.kl },
          })
        ),
        returnValue
      );
    }),
    (WR360.bN.prototype.aS = function (iw) {
      var bC = 0;
      for (this.cX.contains(iw) && (bC = 1); this.cX.ds() > bC; ) {
        var af = this.cX.mh(0);
        af != iw &&
          (af.removeEventListener(WR360.ah.eD, this.hm),
          af.removeEventListener(WR360.ah.dU, this.eK),
          af.removeEventListener(WR360.ah.fD, this.eK),
          af.aE(),
          this.cX.removeItem(af));
      }
      0 == this.cX.ds() && this.bh.hc(!1);
    }),
    (WR360.bN.prototype.iM = function (bW, jT) {
      var jq = this.bU.lU(this.kl);
      null != this.bU &&
        0 !== jq[bW].F.src.length &&
        (this.hs(jq[bW].F.src),
        this.flippingToLowresOnZoomOut || this.eh(bW),
        jT) &&
        (this.hw = !1);
    }),
    (WR360.bN.prototype.kg = function () {
      if (null != this.ce)
        for (var i = 0; i < this.ce.length; i++) this.ce[i].Visible = !1;
    }),
    (WR360.bN.prototype.eh = function (bW, aX) {
      if (this.db) {
        var bn;
        if (!this.bh.av || (this.bh.av && this.bh.tS))
          if (1 != this.aG.is(":visible"))
            return void ((bn = this).ph = setTimeout(function () {
              bn.eh(bW, aX);
            }, 400));
        if ((this.kg(), this.bU)) {
          var af = this.bU.lU(this.kl)[bW];
          if (af) {
            for (var i = 0; i < af.image.bF.length; i++) {
              var ai,
                scaledPt,
                al = af.image.bF[i];
              null != al &&
                null != (ai = this.cA[al.source]) &&
                (al.clip.parsed
                  ? ai.SetClip(
                      this.calcScaledPoint(al.clip.x, al.clip.y),
                      { width: al.clip.width, height: al.clip.height },
                      al.clipPoints
                    )
                  : ((scaledPt = this.calcScaledPoint(al.offsetX, al.offsetY)),
                    ai.uv(scaledPt.scaleX, scaledPt.scaleY)),
                ai.aH(!0, aX),
                (this.hz[al.source].Visible = !0));
            }
            this.nT(), this.kQ();
          }
        }
      } else this.nT();
    }),
    (WR360.bN.prototype.calcScaledPoint = function (x, y) {
      var imgElm = this.aG;
      return {
        scaleX:
          imgElm.css("left").gO() +
          imgElm.css("margin-left").gO() +
          x * (imgElm.css("width").gO() / this.es),
        scaleY:
          imgElm.css("top").gO() +
          imgElm.css("margin-top").gO() +
          y * (imgElm.css("height").gO() / this.fe),
      };
    }),
    (WR360.bN.prototype.nT = function () {
      for (var i = 0; i < this.ce.length; i++) {
        var bi = this.ce[i];
        void 0 !== bi &&
          null != bi &&
          null != (bi = this.cA[bi.Id]) &&
          null != bi.aO &&
          bi.nT();
      }
    }),
    (WR360.bN.prototype.kQ = function () {
      for (var i = 0; i < this.ce.length; i++) {
        var jg = this.ce[i],
          oc = this.cA[jg.Id];
        jg.Visible || oc.aH(!1), oc.tz(jg.Visible);
      }
    }),
    (WR360.bN.prototype.GetPolySize = function (width, height) {
      return {
        width: width * (this.aG.css("width").gO() / this.es),
        height: height * (this.aG.css("height").gO() / this.fe),
      };
    }),
    (WR360.bN.prototype.kM = function (
      duration,
      left,
      top,
      marginLeft,
      marginTop,
      width,
      height
    ) {
      for (
        var af = this.bU.lU(this.kl)[this.aF], i = 0;
        i < af.image.bF.length;
        i++
      ) {
        var ai,
          zoomScaleY,
          zoomScaleX,
          al = af.image.bF[i];
        null != al &&
          null != (ai = this.cA[al.source]) &&
          ai.aO.bi.renderMode != WR360.kc.bf.au &&
          (al.clip.parsed
            ? ((zoomScaleX = width / this.es),
              (zoomScaleY = height / this.fe),
              ai.bb.animate(
                {
                  left: left + marginLeft + al.clip.x * zoomScaleX,
                  top: top + marginTop + al.clip.y * zoomScaleY,
                  width: al.clip.width * zoomScaleX,
                  height: al.clip.height * zoomScaleY,
                },
                { duration: duration, queue: !1 }
              ))
            : ((zoomScaleX = ai.nC()),
              ai.bb.animate(
                {
                  left:
                    left +
                    marginLeft +
                    al.offsetX * (width / this.es) -
                    zoomScaleX.width / 2,
                  top:
                    top +
                    marginTop +
                    al.offsetY * (height / this.fe) -
                    zoomScaleX.height / 2,
                  width: zoomScaleX.width,
                  height: zoomScaleX.height,
                },
                { duration: duration, queue: !1 }
              )));
      }
    }),
    (WR360.bN.prototype.lx = function (aX) {
      if (this.ce)
        for (var i = 0; i < this.ce.length; i++) {
          var oc = this.cA[this.ce[i].Id];
          oc.aH(!1, aX), oc.tz(!1, !0);
        }
      this.bh.R = !1;
    }),
    (WR360.bN.prototype.hs = function (src) {
      this.bd.attr("src", src);
    }),
    (WR360.bN.prototype.bo = function () {
      for (var aI = new Array(), i = 0; i < this.ce.length; i++) {
        var bi = this.ce[i];
        bi && (bi = this.cA[bi.Id]) instanceof WR360.aT && aI.push(bi.mv());
      }
      return aI;
    }),
    (WR360.bN.prototype.uO = function (dj, timeout, hZ) {
      dj = this.cA[dj];
      dj instanceof WR360.aT && dj.eb(timeout, hZ);
    }),
    (WR360.bN.prototype.op = function (dj) {
      dj = this.cA[dj];
      dj instanceof WR360.aT && dj.gY(!0);
    }),
    (WR360.bN.prototype.vf = function (dj) {
      dj = this.cA[dj];
      dj instanceof WR360.aT && dj.vb();
    }),
    (WR360.bN.prototype.qb = function (dj, isHide) {
      dj = this.cA[dj];
      dj instanceof WR360.aT && (dj.pZ(isHide), this.fP());
    }),
    (WR360.bN.prototype.qG = function () {
      for (var i = 0; i < this.ce.length; i++) {
        var bi = this.ce[i];
        bi &&
          ((bi = this.cA[bi.Id]) instanceof WR360.aT ||
            bi instanceof WR360.cI) &&
          bi.pM();
      }
    }),
    (WR360.bN.prototype.lO = function (e) {
      (this.db = !0), this.eh(this.aF, !0), this.bh.ih(!0);
    }),
    (WR360.bN.prototype.mo = function (e) {
      (this.db = !1), this.lx(!0), this.bh.ih(!1);
    }),
    (WR360.bN.prototype.fP = function () {
      this.eh(this.aF);
    }),
    (WR360.bN.prototype.hm = function (e, offset) {
      null != e.af &&
        (this.cX.removeItem(e.af),
        0 == this.cX.ds() && this.bh.hc(!1),
        this.en) &&
        (e.af.removeEventListener(WR360.ah.eD, this.hm),
        e.af.removeEventListener(WR360.ah.dU, this.eK),
        e.af.removeEventListener(WR360.ah.fD, this.eK),
        e.af.index == this.aF) &&
        this.fK(this.aF);
    }),
    (WR360.bN.prototype.eK = function (e) {
      null != e.af &&
        (this.cX.removeItem(e.af),
        0 == this.cX.ds() && this.bh.hc(!1),
        e.af.removeEventListener(WR360.ah.eD, this.hm),
        e.af.removeEventListener(WR360.ah.dU, this.eK),
        e.af.removeEventListener(WR360.ah.fD, this.eK));
    }),
    (WR360.sY = function () {
      (this.sZ = !1),
        (this.pixriotEventHost = null),
        (this.label = document.title),
        (this.rN = "webrotate360"),
        (this.eventTrackingCallback = null);
    }),
    (WR360.sY.prototype.cD = function (
      viewName,
      sZ,
      pixriotEventHost,
      eventTrackingCallback
    ) {
      0 < viewName.length && (this.label = viewName),
        (this.eventTrackingCallback = eventTrackingCallback),
        (this.sZ = sZ),
        (this.pixriotEventHost = pixriotEventHost);
    }),
    (WR360.sY.prototype.Event = function (action, value) {
      if (
        (this.sZ &&
          "function" == typeof gtag &&
          ((props = {
            webrotate360_action: action,
            webrotate360_label: this.label,
          }),
          void 0 !== value && (props.webrotate360_timing = value),
          gtag("event", "webrotate360", props)),
        this.pixriotEventHost)
      ) {
        var props,
          queryProp = null;
        switch (action) {
          case WR360.sY.rU.sG:
          case WR360.sY.rU.sc:
            queryProp = "loaded";
            break;
          case WR360.sY.rU.rC:
            queryProp = "img_grab";
            break;
          case WR360.sY.rU.te:
            queryProp = "spt_popup";
            break;
          case WR360.sY.rU.rR:
            queryProp = "spt_action";
            break;
          case WR360.sY.rU.ZOOM:
          case WR360.sY.rU.rQ:
          case WR360.sY.rU.sP:
          case WR360.sY.rU.FULLSCREEN:
          case WR360.sY.rU.sk:
            queryProp = "misc";
        }
        queryProp &&
          ((props = 0 < this.pixriotEventHost.lastIndexOf("?") ? "&" : "?"),
          (value = value || ""),
          jQuery.ajax({
            type: "HEAD",
            url:
              this.pixriotEventHost +
              props +
              queryProp +
              "=" +
              value +
              "&cache=" +
              Date.now(),
          }));
      }
      this.eventTrackingCallback &&
        this.eventTrackingCallback(this.rN, action, this.label, value);
    }),
    (WR360.sY.rU = {}),
    (WR360.sY.rU.ZOOM = "Zoom"),
    (WR360.sY.rU.rQ = "Playback"),
    (WR360.sY.rU.sP = "ArrowNavigation"),
    (WR360.sY.rU.FULLSCREEN = "Fullscreen"),
    (WR360.sY.rU.sk = "HotspotsOnOff"),
    (WR360.sY.rU.rC = "ImageGrab"),
    (WR360.sY.rU.rW = "ImageHover"),
    (WR360.sY.rU.sG = "ViewerLoaded"),
    (WR360.sY.rU.sc = "ViewerReloaded"),
    (WR360.sY.rU.te = "HotspotPopup"),
    (WR360.sY.rU.rR = "HotspotAction"),
    (WR360.bs = function () {}),
    (WR360.bs.prototype.cD = function () {
      var self = this;
      jQuery(".wr360embed, .wr360embed-cdl").each(function () {
        var fn,
          data = self.ed(this),
          cF = "wr360_" + data.name + "_playerid",
          hX =
            (1 == data.fsclick
              ? (hX = jQuery(this).attr("id")) && 0 < hX.length
                ? (cF = hX)
                : jQuery(this).attr("id", cF)
              : ((hX = jQuery(
                  "<div id='" + cF + "' class='wr360_player'></div>"
                )),
                jQuery(this).append(hX),
                0 < data.background.length &&
                  hX.css("background-color", data.background)),
            WR360.ImageRotator.Create(cF));
        (hX.settings.configFileURL = data.xmlfile),
          (hX.licenseFileURL = data.licfile),
          (hX.licenseCode = data.lic),
          (hX.settings.graphicsPath = data.graphics),
          (hX.settings.googleEventTracking = data.events || data.eventsga),
          (hX.settings.pixriotEventTracking = data.eventspr),
          (hX.settings.responsiveBaseWidth = data.basewidth),
          (hX.settings.responsiveMinHeight = data.minheight),
          (hX.settings.eventTrackingAlias = data.name),
          (hX.settings.rootPath = data.rootpath),
          (hX.settings.fullScreenOnClick = data.fsclick),
          (hX.settings.inBrowserFullScreen = data.browserfs),
          (hX.settings.alt = data.alt),
          (hX.settings.skin = data.skin),
          0 < data.onready.length &&
            "function" == typeof (fn = window[data.onready]) &&
            (hX.settings.apiReadyCallback = fn),
          0 < data.onprogress.length &&
            "function" == typeof (fn = window[data.onprogress]) &&
            (hX.settings.progressCallback = fn),
          hX.runImageRotator();
      });
    }),
    (WR360.bs.prototype.ed = function (hk) {
      var hk = jQuery(hk).data("imagerotator"),
        defs = new WR360.jQ();
      return (
        (hk.name = this.bv(hk.name, new Date().getTime())),
        (hk.licfile = this.bv(hk.licfile, "license.lic")),
        (hk.lic = this.bv(hk.lic, "")),
        (hk.graphics = this.bv(
          hk.graphics,
          "https://cdn.webrotate360.com/lib/imagerotator/graphics"
        )),
        (hk.events = this.bv(hk.events, defs.googleEventTracking)),
        (hk.eventsga = this.bv(hk.eventsga, defs.googleEventTracking)),
        (hk.eventspr = this.bv(hk.eventspr, defs.pixriotEventTracking)),
        (hk.basewidth = this.bv(hk.basewidth, defs.responsiveBaseWidth)),
        (hk.minheight = this.bv(hk.minheight, defs.responsiveMinHeight)),
        (hk.rootpath = this.bv(hk.rootpath, defs.rootPath)),
        (hk.background = this.bv(hk.background, "")),
        (hk.onready = this.bv(hk.onready, "")),
        (hk.onprogress = this.bv(hk.onprogress, "")),
        (hk.fsclick = this.bv(hk.fsclick, defs.fullScreenOnClick)),
        (hk.browserfs = this.bv(hk.browserfs, defs.inBrowserFullScreen)),
        (hk.alt = this.bv(hk.alt, "")),
        (hk.skin = this.bv(hk.skin, "")),
        hk
      );
    }),
    (WR360.bs.prototype.bv = function (param, ez) {
      return void 0 === param || param.length <= 0 ? ez : param;
    }),
    (WR360.fH = function (bV, aO, H) {
      this.aB().constructor.call(this),
        (this.bV = bV),
        (this.bh = bV.bh),
        (this.dv = null),
        (this.gM = null),
        (this.gS = null),
        (this.iX = WR360.by.ge()),
        (this.H = H),
        (this.aO = aO),
        (this.hotspotInfo = aO.bi.hotspotInfo),
        (this.sT = 0),
        (this.isImageContentMode = this.aO.isImageContentMode),
        (this.jv = null);
    }),
    WR360.fH.aK(WR360.dh),
    (WR360.fH.prototype.iL = function () {
      var hn,
        self,
        wZ = this.isImageContentMode
          ? "lightbox_rollover"
          : "lightbox_rollover2";
      (this.dv = jQuery(
        "<div class='hotspot_rollover " +
          wZ +
          " " +
          this.aO.bi.id +
          "_rollover wr360rollover_" +
          this.bV.bh.oY +
          "' id='" +
          this.iX +
          "'/>"
      ).appendTo(this.H)),
        this.isImageContentMode
          ? ((this.gM = jQuery(
              this.rm("<div class='img_wrap'></div>")
            ).appendTo(this.dv)),
            this.gM.css({
              "background-image": "url(" + this.aO.F.src + ")",
              "background-color": this.hotspotInfo.imgBkColor,
            }),
            this.aO.lT() && this.subscribeToClickEvents(this.gM))
          : "fixed" === this.hotspotInfo.lbxPosition &&
            this.dv.css({ position: "fixed" }),
        (this.hotspotInfo.cdata || this.hotspotInfo.txt) &&
          ((wZ = this.isImageContentMode ? "img_title" : "lbox2_wrap"),
          (hn = jQuery("<div class='" + wZ + "'></div>").appendTo(this.dv)),
          (wZ = this.isImageContentMode
            ? jQuery(this.rm("<div class='usr_text'></div>")).appendTo(hn)
            : hn),
          this.hotspotInfo.cdata
            ? wZ.append(this.hotspotInfo.cdata).addClass("hotspot_cdata")
            : (this.kr(hn, wZ),
              (this.jv = this.vE(this.hotspotInfo.txt, wZ)),
              this.jv ||
                (this.isImageContentMode
                  ? wZ
                  : jQuery(
                      this.rm("<div class='lbox2_content'></div>")
                    ).appendTo(wZ)
                ).html(this.hotspotInfo.txt.nA())),
          this.aO.lT()
            ? this.subscribeToClickEvents(jQuery(wZ))
            : ((self = this),
              wZ.find("a").each(function () {
                self.subscribeToLinkClicks(jQuery(this));
              }),
              !this.isImageContentMode &&
                this.aO.js() &&
                WR360.by.fI(
                  wZ,
                  jQuery.proxy(function (e) {
                    this.mb(e);
                  }, this)
                ))),
        this.hotspotInfo.lbxShowClose &&
          ((this.gS = jQuery(
            "<div class='closelbox'><div></div><div></div></div>"
          ).appendTo(this.isImageContentMode ? this.dv : hn)),
          this.hotspotInfo.lbxCloseColor &&
            this.gS
              .find("div")
              .css({ "background-color": this.hotspotInfo.lbxCloseColor }),
          WR360.by.fI(
            this.gS,
            jQuery.proxy(function (e) {
              this.lw(e);
            }, this)
          ));
    }),
    (WR360.fH.prototype.subscribeToLinkClicks = function (elm) {
      var self = this;
      elm.click(function (e) {
        elm.attr("href") || e.preventDefault(),
          self.bh.gD() && self.bh.sm.Event(WR360.sY.rU.rR);
      });
    }),
    (WR360.fH.prototype.subscribeToClickEvents = function (elm) {
      var self = this;
      elm.click(function () {
        self.bh.gD() && self.bh.sm.Event(WR360.sY.rU.rR);
      });
    }),
    (WR360.fH.prototype.rm = function (html) {
      return (html = this.aO.lT()
        ? html.replace(
            "div",
            "a href='" +
              this.hotspotInfo.url +
              "' target='" +
              this.hotspotInfo.urlTarget +
              "'"
          )
        : html);
    }),
    (WR360.fH.prototype.kr = function (hn, ao) {
      var kh, mB;
      this.hotspotInfo.css &&
        (ao.attr("style", this.hotspotInfo.css), hn !== ao) &&
        ((mB = "text-align"),
        hn.css((kh = "background-color"), ao.css(kh)),
        ao.css(kh, "none"),
        hn.css(mB, ao.css(mB)));
    }),
    (WR360.fH.prototype.vE = function (text, ao) {
      var isFrameUrl;
      return !this.isImageContentMode &&
        ((isFrameUrl =
          0 === (text = text.trim()).indexOf("[[") &&
          text.lastIndexOf("]]") === text.length - 2)
          ? (text = text.substr(2, text.length - 4))
          : (isFrameUrl =
              0 === text.indexOf("http://") ||
              0 === text.indexOf("https://") ||
              0 === text.indexOf("file://")),
        isFrameUrl)
        ? (ao.html(
            '                <div class="lbox2_wait"></div>                <div class="lbox2_content lbox2_frame">                     <iframe src="' +
              text +
              '" allowfullscreen/>                </div>'
          ),
          text)
        : null;
    }),
    (WR360.fH.prototype.jw = function () {
      this.iL(),
        this.jY(),
        this.isImageContentMode &&
          this.hotspotInfo.lbxClickActive &&
          !this.aO.lT() &&
          (this.dv.css("cursor", "pointer"),
          WR360.by.fI(
            this.dv,
            jQuery.proxy(function (e) {
              this.mb(e);
            }, this)
          )),
        this.dv.bind("touchstart mousedown touchmove mousewheel", function (e) {
          e.stopPropagation();
        }),
        this.dv.mouseover(function (e) {
          e.stopPropagation();
        }),
        jQuery(document).keyup(
          jQuery.proxy(function (e) {
            27 === e.which && this.cN(!0);
          }, this)
        );
    }),
    (WR360.fH.prototype.jl = function (cU) {
      var bn;
      this.dv.is(":visible") ||
        (this.isImageContentMode &&
          (this.hotspotInfo.lbxBackCover
            ? this.gM.css("background-size", "cover")
            : this.aO.F.width > this.H.width() ||
              this.aO.F.height > this.H.height()
            ? this.gM.css("background-size", "contain")
            : this.gM.css("background-size", "auto")),
        this.dv.fadeIn(
          this.aO.bi.contentFadeIn,
          jQuery.proxy(function (e) {
            this.jY(e);
          }, this)
        ),
        this.jv &&
          (bn = this).dv.find("iframe").each(function () {
            jQuery(this).attr("src", bn.jv);
          }));
    }),
    (WR360.fH.prototype.cN = function (aX, aq) {
      this.dv.is(":visible") &&
        (aX
          ? this.dv.fadeOut(
              this.aO.bi.contentFadeOut,
              jQuery.proxy(function (e) {
                this.iY(e);
              }, this)
            )
          : (this.dv.hide(), this.iY(null))),
        this.jv &&
          this.dv.find("iframe").each(function () {
            jQuery(this).attr("src", "");
          }),
        this.dispatchEvent(
          new WR360.Event(
            WR360.aT.Events.mI,
            !1,
            !1,
            (aq = void 0 !== aq && aq)
          )
        );
    }),
    (WR360.fH.prototype.mb = function (e) {
      if ((e.stopPropagation(), e.preventDefault(), this.aO.js())) {
        if (this.aO.cv(this.bV.bh)) return;
      } else if (!this.isImageContentMode) return;
      this.cN(!0);
    }),
    (WR360.fH.prototype.lw = function (e) {
      e.stopPropagation(), this.cN(!0);
    }),
    (WR360.fH.prototype.jY = function (e) {
      this.sT = Date.now();
    }),
    (WR360.fH.prototype.iY = function (e) {
      this.sT &&
        (this.bh.gD() && this.bh.sm.Event(WR360.sY.rU.te, Date.now() - this.sT),
        (this.sT = 0));
    }),
    (WR360.fH.prototype.iI = function (eJ) {
      return !!this.dv.is(":visible") && WR360.by.fA(this.dv, eJ);
    }),
    (WR360.fH.prototype.delete = function () {
      this.dv.unbind(),
        this.gS && this.gS.unbind(),
        this.dv.remove(),
        (this.bV = null),
        (this.bh = null);
    }),
    (WR360.fH.prototype.tx = function () {}),
    !(function () {
      WR360.by.mG();
      var hT = !1;
      jQuery(window).on("beforeunload", function () {
        jQuery.each(lH.ew, function () {
          this.av && this.pR(null);
        });
      }),
        jQuery(window).resize(function () {
          jQuery.each(lH.ew, function () {
            this.or && this.pS();
          });
        }),
        jQuery(document).ready(function () {
          (hT = !0),
            void 0 !== lH &&
              void 0 !== lH.ew &&
              (new WR360.bs().cD(),
              jQuery.each(lH.ew, function () {
                this.jy();
              }));
        });
      var fp = "",
        oH =
          ((WR360.jX = function () {
            (this.eY = 0), (this.ev = 0), (this.fd = 0), (this.fM = 0);
          }),
          (WR360.ImageRotator = function (cR) {
            this.aB().constructor.call(this),
              cR && ((this.cR = "#" + cR), (this.oY = cR)),
              lH.add(this),
              (this.settings = new WR360.jQ()),
              (this.fm = 0),
              (this.fJ = 0),
              (this.iR = 0),
              (this.dO = 0),
              (this.ei = 0),
              (this.hA = null),
              (this.tQ = null),
              (this.hl = !1),
              (this.rI = !1),
              (this.nX = !1),
              (this.cp = 0),
              (this.ha = 0),
              (this.uf = 0),
              (this.uz = 0),
              (this.hg = 0),
              (this.qe = 0),
              (this.eu = !1),
              (this.eS = 0),
              (this.eO = 0),
              (this.ri = !1),
              (this.nJ = 0),
              (this.kU = !1),
              (this.pY = !1),
              (this.oS = !1),
              (this.bU = null),
              (this.bB = null),
              (this.eE = null),
              (this.eP = 0),
              (this.dG = 0),
              (this.dA = 0),
              (this.loaded = !1),
              (this.tC = ""),
              (this.bA = new WR360.gl()),
              (this.nL = ""),
              (this.configFileFullScreenURL = ""),
              (this.fN = ""),
              (this.gf = ""),
              (this.rootPath = ""),
              (this.cq = null),
              (this.toolbar = new WR360.Toolbar(this)),
              (this.dV = !1),
              (this.reloadImageIndex = -1),
              (this.reloadRowIndex = -1),
              (this.aU = []),
              (this.dn = !1),
              (this.qY = !0),
              (this.R = !1),
              (this.bd = null),
              (this.jW = 0),
              (this.jt = 0),
              (this.eL = new WR360.jX()),
              (this.bV = new WR360.bN()),
              (this.fs = 0),
              (this.fX = 0),
              (this.db = !0),
              (this.fu = !1),
              (this.gC = !1),
              (this.or = !1),
              (this.av = !1),
              (this.uI = !1),
              (this.reloadCallback = null),
              (this.ok = null),
              (this.sm = new WR360.sY()),
              (this.rK = 0),
              (this.sI = 0),
              (this.rZ = 0),
              (this.fY = 0),
              (this.gb = null),
              (this.vh = null),
              (this.bp = null),
              (this.gk = null),
              (this.nb = null),
              (this.dC = 0),
              (this.nB = 0),
              (this.po = 0),
              (this.canShowAutoToolbar = !1),
              (this.tF = 0),
              (this.ts = 0),
              (this.fl = 0),
              (this.ak = 0),
              (this.aV = 0),
              (this.fq = 0),
              (this.oa = 0),
              (this.pp = 0),
              (this.O = 50),
              (this.eo = 500),
              (this.gy = 0),
              (this.gQ = -1),
              (this.bw = 300),
              (this.jN = 0),
              (this.pixriotEventHost = null),
              (this.licenseFileURL = "license.lic"),
              (this.licenseCode = ""),
              (this.cr = null),
              (this.cZ = null),
              (this.oV = !1),
              (this.fT = !0),
              (this.fQ = !1),
              (this.pL = !0),
              (this.eg = null),
              (this.dN = null),
              (this.bY = null),
              (this.qZ = null),
              (this.hB = !1),
              (this.bS = !1),
              (this.ey = !1),
              (this.gT = !1),
              (this.bM = !1),
              (this.qX = !1),
              (this.lB = 1),
              (this.tS = !1),
              (this.qF = jQuery.proxy(function (event) {
                this.qE(event);
              }, this)),
              (this.nV = jQuery.proxy(function (event) {
                this.uj(event);
              }, this)),
              (this.gu =
                "rdVd3lrjF/EFcxKccvguE5TGmYpDXz16dn3CLv2qNR7fcnEECgg7ebiZEA=="),
              (this.oD =
                "i8ujXOfyQKsb0ntiQLRJNqDYT9/9OTL6lvTpPB41YFAxMZ9Rt1pBpA=="),
              (this.hV = "tznIlQWa5WhwFmbUOB2K7wUievL9NIk6D2xAfhPAINg="),
              (this.pD =
                "WT4m4bE1yJMhST/ePqPQlkG4JrxCW2/82xkA4CeIrmCCH9MfFA=="),
              (this.uM = "rI3OsLYwkEXLCxxrL3YN85dpUF7aEFIKfscK"),
              (this.gF =
                "RamEB6nl1dIeNBEZm7QDsOVb3dGGYWkwNVHWuvJ94wp9G3vW5SHvOOlX44oxMBX7X1vxUANM+tmDqjoqhA=="),
              (this.ju = "GlSkJBzsD5RcCjrwLEVCJ7mIFwJDyCqGGD5NdA=="),
              (this.bc =
                "I13W8RlKe6Yayl4GlxmUeikOpnYC2f+670yXu72y7idNN0j795CD7MjrbQHnCttCWNIRfqtetvfZdjtFHMv9B7N/svehVJIIBsyUikJiMwEb6x2IQ4F8Ue4S76ECejNSntsUyU13oKS5AbEC9I2fJPKiAN7Oq0L1wpWA/3ScM3QEsWCdWBJB6g/BFwhPLtUawmtmb254VB7usOdolJ7j/rE8Pto5WyJpPFwNzdADjNTMQYwO0ruTgFdxUcI7IPnU3UxU49p+VNyE+NNU8agNqu+ja5effa3g9YNRg8MFGXE4uzKOr/s="),
              (this.ap =
                "pmuBtCy0JoqL8AqvfsdLp7NbUBIFSFSHA/hjzT60rFMcQZGaXjIvVG+PwebPexdTRRFhyH/8IrTen6fzgGtVnycjCxmpPvwvFrxqmS1BUPc38AiMjyJA+wcPoTqnhL1YZOfCkjvQOuafTER2Kuvy09Xw9ObUwJqTP3Bh7nxnMsu/O3tM12gTkg/MHR3c488+qMyNHGh52KogLg/RrlY8EFSlf35VhJrvqCG6PBfGaspU57NOPDpbzwVi2d06gG4rBxa3CA4FsOTfOwxsb+L2yYc54X43e8NT"),
              (this.aY =
                "gLXFo2OyFFajJLgDCn5XLL+N71QzGlT6B6SRJw9wR6kFt1YpKgjqYwA="),
              (this.bj =
                "U9qFtDJ21PC9rzk1zcXKJ0aTTb0z7Ojb48ynUZ6BaTrthixUOunP6ZM="),
              (this.aQ =
                "6WRVZbWJBZrmjJ4O+gNBk4awRfKJaHfVd0ucq/Be49pmSPS3hN04UyU="),
              (this.cl = "Lry6mt1Er3KgdvDjSqztJMzw8wHNLfeCLQIJ"),
              (this.cB = "2+lMNTNVifwdgdpXfSXjH+M4KoHd0xgNcw=="),
              (this.ay = "QNwfbJZzxJbLJoAS6wD5rjfHAwo="),
              (this.eN = "nULFbgdXOAsnDyopPfu7L0d0NtZ5uMg+AA=="),
              (this.eQ = "4UVPbHd7uENiUDjx+NgOOXMkA9nZbGalFg=="),
              (this.ft = "cKxrnJWgw/pyjuCD7caPMhlgsXkfOeTBusEnYw=="),
              (this.iO = "sU1SxZ+bTWPPsst0n2G3qVvXmytz72GF/Dk7IouwuME="),
              (this.gZ =
                "yEvByyFGwPn9PODQyazu6d22IbKQKoUYm0puGAnoKLbaWmrieWizccI4EOouWWN4lHyq/MPudc9xTPClmSInstXxtQ=="),
              (this.oG =
                "N3Oot1cePmbsji2oPcfULKAFPMinvbeLZH31LoT9L4dbkWM3k15lxRgcWBytwrfPAY8uvzhLrPrPJxiXLKQSbCPc5VhbU2SX4PS+RowzOvSKGUDOizkbK2CS9+kNrEkD+D8V3dwfmtLqMZz9oKincRhdEV6xfLOU0Qa3hoLEb2aGjBD8ExW52qnqFglW4iIRL8f6IOHe39qgrjG6KKYDb4lP4cppwXHZWbSlsIWK0TKoJUJZbW9ZX8wFbt5PR4BNwqPmmoaNQyMb+4K3E0V+wC3x9TB925PaBWjy/cvWaWn5Bp9RMg2VTzdzP8xeg4XtdtNmNmFwDdFekRDcwwSivzPck0EHtSXAG7yrrX4YavkjEChsn77hVPzAG6eE+6WCHTPLJljaSAhoy0iwonbNc9Voq3evmBW7Efgzi03UykTfEJZLc8MfrVJ6iafslafD4wYRxLpTXIO/oKsRnCvMfr4Q0PUWKLY65gZXVv/LAlMiglj0uWXUhE3hIx4QrnyUl6848eTaHxALUI+172sS2oMnIQxT7ofapXJS3MSD96JDHAbMjAJCyEvCBj/8msZfd5tiuAozgEb8AV7qU2/KMCyL+tqXbqkCz/x7P+sTFmLNlSgNn7SjLIMGji7gDxUR39wZOXACsl8Y0k+aYzJ8T/Ylk5AJf1wnNi6X86+JAPPimkAIXfEVXJ87yKG1jB9kFksfBxC7hnmzxcxrMcnXV62HBS9zCB+P7AwJhPFMHZNNwHPg16NWqmW4CIt2EmLDNFSf5+GE4WG6UxnI/IyJYLmKhP4="),
              (this.pf = "Xj/4NHvML4pcsq3MvkaM3AhqEAHI30bVi+sjPrV7rQ=="),
              (this.oz =
                "OGSH4lbDbOGbEEdbKPThRY4clOe0bgh/0he/hcDHFWw4S2VT9feiyo5zOHX7gO4Cng7ZCbU0Yh2jdHWGyv4tOdk="),
              (this.oO = "4IIhiEFPgpBJmPziEDdMl+hEws/AK+6ACB9P"),
              (this.hU =
                "RTR7h9G0iybClgAKpw+bxhAq01JBVtZqngSiAZUOYoWI6uwhWDBCprBK04s5Rj3hWQsawztsRFeEjMbIdhi3F3eBa1cJyTIhceBXhmGusFzcb35LpoEM8C8aO12BlCO2bB5aPanQfOWPqPswgdFWENgt0Hjrxii/VzDH1+eP+o8c8VMb7LeypwEzz2+VrDHLFgy8NF5BQQMw92SpBkL6TMroAeCp7Pt4+7PVmIHjd/Tiq7o1DO0ZmvMpZc84owOAzesRD6AsLAhVAlcprJPlOSE8g9XIzypUqWYCWsSGlrvQMlrnzpVw43CFEYFABorIYlfRxJei/S2h2grnVZ52lkPSET5FiL/uuhTg8PCJmaamaVtXuucxmDviAUoDFS65uX2zTP48nowqHyz2C2+cYyJkUC3OobBZp9xthjYmE+1nqqrRh+s5qFDiS8Gr/7OXCIa1qaeFwmEIy55cp8GPFOVUzmEct6dZI4YfsWGxtlkTEQ+jjyj6HT5ve4XYMulkj7yQFb2+LzogCMbGw/BrJIExoVCcl6ijaHgJ2HTMMBou31YkMlp5iP6eUV7R7bfDAbHLFp88ufSaAT7xk5SRYqwcCZH+dVRn55SheAwoHBkfm7FaRUF5P5d5UgjlpqYnWZoF8Kzbr+oSaL5jIxki9LuqwnMs9OB0HNcu90AeWFjxeX5bHE+3/bfLY9cQo53VasMh8LjUV28TRv71rxW8Gw4TNFrUfhOumOpYdvHgXg4oFwTBviQ3uM2ckYurQwe7/Xysnj7o25tLjVeqNt+keCbXVJGG1OIcxvSHH3+9zhx4FPuAbs1s49XrZ50sVcQsUvAGuLhpRQNy2hnSUsBj8+Kgd2yEyJ+Lqe9XirHfTH5G2w3xjZpS3mu1j4Cs2W7Lg+mbI0ZuRatGlW1l09U2U/wP1wgCg3verVqXPYOF9YUoESlKFCjc5iBCuCprSNKlivQiBijmAfP+yr4wXpqjrjD5BH0CrDPhlRYY5oFtNbOA7bkmXM7PW0au4In40jVjFIWDeksZTe64iU2Lq4BbK68F+TsrBByt0y68h1ID2ZenZSNBOsWPd7ia2kGUngGb/SDS+5Dfr2VByazUw+ivcdscos3JsOrL7vbn9hxKxbhy9B8o1GeCa6LMPkH4XQz36iAUAxFVfUveqTxvAfG/Eas4Nq+FmuASkfqr2mo6G9+ASMKwm+6y6G38bCeY9w4Y1+QjBqp6B03Ht/GKJ9imf6dDx6vA0uoFA+i27vRHhUgBrfcRNqgoa7zp7ZtF1B5favRr6pb/5bKJK204AmLka0Qjo7FnSjla/Fr3+oz7Q3dlcT0goEoQRwVF6oEKNxtVlKWT4nJBlfxYH70dEdLd+17B6ln6EN7cFlJHWl7keAgypYbPXOEEzwRdp2OfvwaOKROZo1Wary62I2P19G+c0UXSqlXZow1BViQL3ucJCav6QCuaQYlovC9njtk/uLFJRgZk9XMS2pHDRjyrgKbu69rM+PLZl1U3HbB3Vod1/ND66IPHoaEnOlwPrSiIQEVhB7xvWg0IzzuFDtKGyg==");
          }),
          WR360.ImageRotator.aK(WR360.dh),
          (WR360.ImageRotator.Events = {}),
          (WR360.ImageRotator.Events.qt = "IMAGEROTATOR_API_IMAGE_ZOOM"),
          (WR360.ImageRotator.Events.un = "IMAGEROTATOR_API_IMAGE_ZOOM_START"),
          (WR360.ImageRotator.Events.pP = "IMAGEROTATOR_API_FRAME_CHANGED"),
          (WR360.ImageRotator.Events.ve = "IMAGEROTATOR_API_USER_INPUT"),
          !(WR360.ImageRotator.km = 4)),
        kP =
          ((WR360.ImageRotator.Create = function (cR) {
            var nf;
            return oH
              ? new WR360.ImageRotator(cR)
              : ((nf = lH.get(0)),
                null != cR &&
                  0 < cR.length &&
                  ((nf.cR = "#" + cR), (nf.oY = cR)),
                (oH = !0),
                nf);
          }),
          (WR360.ImageRotator.kR = function () {
            return (fp = 0 < fp.length ? fp : kP + "ECAwQFBgcICQAB" + kZ);
          }),
          (WR360.ImageRotator.prototype.bm = function () {
            var ns;
            1 != this.bM &&
              ((ns = WR360.ImageRotator.kR()),
              (ns = ac.fk.bL(ns)),
              (this.gu = ac.G.aD(this.gu, ns)),
              (this.oD = ac.G.aD(this.oD, ns)),
              (this.hV = ac.G.aD(this.hV, ns)),
              (this.pD = ac.G.aD(this.pD, ns)),
              (this.uM = ac.G.aD(this.uM, ns)),
              (this.gF = ac.G.aD(this.gF, ns)),
              (this.ju = ac.G.aD(this.ju, ns)),
              (this.bc = ac.G.aD(this.bc, ns)),
              (this.ap = ac.G.aD(this.ap, ns)),
              (this.aY = ac.G.aD(this.aY, ns)),
              (this.bj = ac.G.aD(this.bj, ns)),
              (this.aQ = ac.G.aD(this.aQ, ns)),
              (this.hq = ac.G.aD(this.hU, ns)),
              (this.cl = ac.G.aD(this.cl, ns)),
              (this.cB = ac.G.aD(this.cB, ns)),
              (this.ay = ac.G.aD(this.ay, ns)),
              (this.eN = ac.G.aD(this.eN, ns)),
              (this.eQ = ac.G.aD(this.eQ, ns)),
              (this.ft = ac.G.aD(this.ft, ns)),
              (this.iO = ac.G.aD(this.iO, ns)),
              (this.gZ = ac.G.aD(this.gZ, ns)),
              (this.oG = ac.G.aD(this.oG, ns)),
              (this.pf = ac.G.aD(this.pf, ns)),
              (this.oz = ac.G.aD(this.oz, ns)),
              (this.oO = ac.G.aD(this.oO, ns)),
              (this.bM = !0));
          }),
          (WR360.ImageRotator.prototype.rh = function () {
            jQuery.each(lH.ew, function () {
              this.loaded && this.qn();
            });
          }),
          (WR360.ImageRotator.nn = function (align, defaultValue) {
            return null == align
              ? defaultValue
              : "left" == align.toLocaleLowerCase()
              ? -1
              : "right" == align.toLocaleLowerCase()
              ? 1
              : defaultValue;
          }),
          (WR360.ImageRotator.prototype.reload = function (
            configFileURL,
            rootPath,
            hZ,
            reloadImageIndex,
            reloadRowIndex
          ) {
            this.uu(),
              this.kI(!1),
              (this.ri = !0),
              configFileURL &&
                0 < configFileURL.length &&
                (this.settings.configFileURL = configFileURL),
              (this.settings.rootPath = rootPath),
              (this.hB = !1),
              this.co(),
              this.cJ(),
              this.ff(),
              this.hD(),
              this.mU(),
              this.jN && clearTimeout(this.jN),
              this.bV.pJ && clearInterval(this.bV.pJ),
              this.bV.ph && clearTimeout(this.bV.ph),
              (this.loaded = !1),
              (this.eP = 0),
              (this.dC = 0),
              (this.db = !0),
              (this.fN = this.settings.configFileURL),
              (this.gf = this.settings.rootPath),
              (this.fX = 0),
              (this.bA = new WR360.gl()),
              (this.bV = new WR360.bN()),
              (this.reloadCallback = null),
              (this.dV = !0),
              (this.reloadImageIndex =
                void 0 !== reloadImageIndex ? reloadImageIndex : -1),
              (this.reloadRowIndex =
                void 0 !== reloadRowIndex ? reloadRowIndex : -1),
              void 0 !== hZ && null != hZ && (this.reloadCallback = hZ),
              this.gN(null);
          }),
          (WR360.ImageRotator.prototype.delete = function () {
            (this.ri = !0),
              this.co(),
              this.cJ(),
              this.ff(),
              this.hD(),
              this.mU(),
              this.jN && clearTimeout(this.jN),
              this.bV.pJ && clearInterval(this.bV.pJ),
              this.bV.ph && clearTimeout(this.bV.ph),
              jQuery(this.cl).remove(),
              this.bp.remove(),
              this.eE && (this.eE = null),
              this.bV && (this.bV = null),
              this.toolbar && (this.toolbar = null),
              this.cq && (this.cq = null),
              this.bB && (this.bB = null),
              this.bU && (this.bU = null),
              this.eg && (this.eg.ub(), (this.eg = null)),
              this.uu(),
              (this.qF = null),
              (this.nV = null),
              lH.remove(this),
              null == lH.get(0) && (_imageRotator = null);
          }),
          (WR360.ImageRotator.prototype.ih = function (db) {
            (this.db = db), this.bY && this.bY.fi(!this.db);
          }),
          (WR360.ImageRotator.prototype.lz = function () {
            this.bA.ly() && this.bV.mo();
          }),
          (WR360.ImageRotator.prototype.iV = function () {
            this.bA.ly() && this.bV.lO();
          }),
          (WR360.ImageRotator.prototype.runImageRotator = function (cR) {
            if (!this.cR) {
              if (!cR) throw new Error("Player ID parameter is empty.");
              (this.cR = "#" + cR), (this.oY = cR);
            }
            var bn;
            (this.vh = jQuery(this.cR)),
              this.settings.fullScreenOnClick && void 0 === this.pH
                ? (this.bm(),
                  (bn = this).vh.click(function (e) {
                    e.preventDefault(), bn.rg();
                  }))
                : ((this.sR = "#" + this.aR("wr360UpButton", "wr360UpButton")),
                  (this.sj =
                    "#" + this.aR("wr360DownButton", "wr360DownButton")),
                  (this.gU =
                    "#" + this.aR("wr360LeftButton", "wr360LeftButton")),
                  (this.hd =
                    "#" + this.aR("wr360RightButton", "wr360RightButton")),
                  (this.jA =
                    "#" + this.aR("wr360ZoomButton", "wr360ZoomButton")),
                  (this.jD =
                    "#" + this.aR("wr360PlayButton", "wr360PlayButton")),
                  (this.kp =
                    "#" +
                    this.aR("wr360HotspotsButton", "wr360HotspotsButton")),
                  (this.pQ =
                    "#" +
                    this.aR("wr360FullScreenButton", "wr360FullScreenButton")),
                  (this.ja =
                    "#" + this.aR("wr360ThemePanel_", "wr360ThemePanel_")),
                  (this.ie = "#" + this.aR("wr360ToolBar", "wr360ToolBar")),
                  (this.nQ =
                    "#" +
                    this.aR("wr360ThemePanelBack", "wr360ThemePanelBack")),
                  (this.kW =
                    "#" + this.aR("wr360ProgressBar", "wr360ProgressBar")),
                  (this.fj =
                    "#" + this.aR("wr360ProgressNum", "wr360ProgressNum")),
                  this.vh.addClass("wr360_player"),
                  (this.fm = this.vh.innerWidth()),
                  (this.fJ = this.vh.innerHeight()),
                  (this.iR = this.fJ),
                  (this.tC = this.vh.css("backgroundColor")),
                  (this.gf = this.settings.rootPath),
                  (this.fN = this.settings.configFileURL),
                  this.gN(null),
                  (this.or = !0));
          }),
          (WR360.ImageRotator.prototype.gN = function (hQ) {
            (hQ && 0 != hQ.success) || ((this.bS = !0), this.jy());
          }),
          (WR360.ImageRotator.prototype.aR = function (stringToChange, oA) {
            return stringToChange.replace(oA, oA + "_" + this.oY);
          }),
          (WR360.ImageRotator.prototype.oQ = function () {
            this.qX ||
              ((this.ap = this.aR(this.ap, this.cl.replace("#", ""))),
              (this.aY = this.aR(this.aY, this.cB.replace("#", ""))),
              (this.bj = this.aR(this.bj, this.eN.replace("#", ""))),
              (this.aQ = this.aR(this.aQ, this.eQ.replace("#", ""))),
              (this.hq = this.aR(this.hq, "wr360container")),
              (this.hq = this.aR(this.hq, "wr360image")),
              (this.hq = this.aR(this.hq, "wr360toolheader")),
              (this.hq = this.aR(this.hq, "wr360placer")),
              (this.hq = this.aR(this.hq, "wr360LeftButton")),
              (this.hq = this.aR(this.hq, "wr360RightButton")),
              (this.hq = this.aR(this.hq, "wr360UpButton")),
              (this.hq = this.aR(this.hq, "wr360DownButton")),
              (this.hq = this.aR(this.hq, "wr360ZoomButton")),
              (this.hq = this.aR(this.hq, "wr360PlayButton")),
              (this.hq = this.aR(this.hq, "wr360HotspotsButton")),
              (this.hq = this.aR(this.hq, "wr360FullScreenButton")),
              (this.hq = this.aR(this.hq, "wr360ThemePanel_")),
              (this.hq = this.aR(this.hq, "wr360ToolBar")),
              (this.hq = this.aR(this.hq, "wr360ThemePanelBack")),
              (this.hq = this.aR(this.hq, "wr360ProgressBar")),
              (this.hq = this.aR(this.hq, "wr360ProgressNum")),
              (this.cl = this.aR(this.cl, "wr360_menu")),
              (this.cB = this.aR(this.cB, this.cB.replace("#", ""))),
              (this.eN = this.aR(this.eN, this.eN.replace("#", ""))),
              (this.eQ = this.aR(this.eQ, this.eQ.replace("#", ""))),
              (this.ft = this.aR(this.ft, "wr360placer")),
              (this.pr = this.ft),
              (this.iO = this.aR(this.iO, "wr360toolheader")),
              (this.pf = this.aR(this.pf, "wr360container")),
              (this.qX = !0));
          }),
          (WR360.ImageRotator.prototype.jy = function () {
            0 == hT && "complete" === document.readyState && (hT = !0),
              0 != this.bS &&
                0 != hT &&
                1 != this.hB &&
                ((this.rK = Date.now()),
                (this.hB = !0),
                this.bm(),
                this.oQ(),
                this.lk(),
                this.pS(),
                this.kO());
          }),
          (WR360.ImageRotator.ov = function () {
            return ac;
          }),
          (WR360.ImageRotator.oZ = function () {
            return WR360.ImageRotator.kR();
          }),
          (WR360.ImageRotator.prototype.hj = function () {
            return this.ek() && this.settings.disableRelativeAssets
              ? ""
              : this.rootPath;
          }),
          (WR360.ImageRotator.prototype.lk = function () {
            this.dV ||
              (this.vh.append(this.hq),
              (this.bp = jQuery(this.pf)),
              (this.gk = jQuery(this.ja)),
              (this.nb = jQuery(this.nQ))),
              this.qV(),
              this.bp.css({
                width: this.vh.innerWidth(),
                height: this.vh.innerHeight(),
              }),
              this.qr && this.qr(),
              this.qU && this.qU(),
              (this.bd = jQuery("#wr360image_" + this.oY)),
              this.settings.alt && this.bd.attr("alt", this.settings.alt),
              this.bV.iF(this, this.bd);
          }),
          jQuery.ajaxSetup({
            error: function (XMLHttpRequest, fr, ec) {
              WR360.bZ.gA(fr),
                WR360.bZ.gA(ec),
                WR360.bZ.gA(XMLHttpRequest.responseText);
            },
          }),
          (WR360.ImageRotator.prototype.im = function () {
            this.aL();
            var aW = 0 != this.fN.length;
            aW && !this.mY()
              ? WR360.bZ.gA("Could not parse XML config path.")
              : ((this.fs = 0),
                (this.dn = !1),
                this.dN && this.dN.as(!1),
                (this.qY = !0),
                (this.R = !1),
                (!this.av && this.pL && 1 == this.fT && this != lH.get(0)) ||
                  (this.av && this.fT && this.pL) ||
                  this.qS() ||
                  (aW ? this.ki() : this.dq()));
          }),
          (WR360.ImageRotator.prototype.kO = function () {
            var bu, options;
            this.licenseCode
              ? this.nd(this.licenseCode)
              : ((options = {
                  type: "GET",
                  url: (bu = this).licenseFileURL,
                  dataType: "text",
                  mimeType: "text/plain",
                  cache: !0,
                  success: function (gi) {
                    bu.nd(gi);
                  },
                  error: function (e) {
                    bu.lW(e);
                  },
                }),
                jQuery.ajax(options));
          }),
          (WR360.ImageRotator.prototype.md = function () {
            (this.ok = new Image()), (this.ok.src = this.gZ);
          }),
          (WR360.ImageRotator.prototype.nd = function (gi) {
            this.qS() ||
              (this.jK(gi), this.im(), this.dV) ||
              this.gz() ||
              WR360.bZ.od(this.gu + " ~ " + this.settings.version);
          }),
          (WR360.ImageRotator.prototype.lW = function (e) {
            this.qS() ||
              (this.dQ(),
              this.im(),
              WR360.bZ.od(this.gu + " ~ " + this.settings.version));
          }),
          (WR360.ImageRotator.prototype.ek = function () {
            return 0 == this.fT;
          }),
          (WR360.ImageRotator.prototype.gz = function () {
            return 1 == this.fQ;
          }),
          (WR360.ImageRotator.prototype.gD = function () {
            return 1 == this.ek() || 0 == this.pL;
          }),
          (WR360.ImageRotator.prototype.qS = function () {
            var lu;
            return (
              !this.pL &&
              (lu = this.jh(document.location.hostname)).length -
                lu.indexOf(this.hV) !==
                this.hV.length &&
              lu.length - lu.indexOf(this.pD) !== this.pD.length
            );
          }),
          (WR360.ImageRotator.prototype.nl = function () {
            var lu;
            return (
              !this.pL &&
              ((lu = this.jh(document.location.hostname)).length -
                lu.indexOf(this.hV) ===
                this.hV.length ||
                lu.length - lu.indexOf(this.pD) === this.pD.length)
            );
          }),
          (WR360.ImageRotator.prototype.jh = function (eA) {
            var gr = 0,
              gG =
                ("http://www" == eA.substr(0, 10)
                  ? (gr = 11)
                  : "http://" == eA.substr(0, 7)
                  ? (gr = 7)
                  : "https://" == eA.substr(0, 8)
                  ? (gr = 8)
                  : "https://www" == eA.substr(0, 11)
                  ? (gr = 12)
                  : "www." == eA.substr(0, 4) && (gr = 4),
                eA.indexOf("/", gr));
            return -1 == gG && (gG = eA.length), eA.substring(gr, gG);
          }),
          (WR360.ImageRotator.prototype.az = function () {
            var lu, kH, tq;
            return (
              !!this.ci() ||
              (lu = this.jh(document.location.hostname)) ===
                (kH = this.jh(this.cZ)) ||
              lu.substr(lu.indexOf(".") + 1, lu.length) === this.uM ||
              (tq = this.jh(this.settings.configFileURL)) === kH ||
              tq.substr(tq.indexOf(".") + 1, tq.length) === this.uM ||
              (-1 === this.cZ.indexOf(".") &&
                4 <= this.cZ.length &&
                -1 !== lu.indexOf(this.cZ))
            );
          }),
          (WR360.ImageRotator.prototype.dQ = function () {
            (this.fQ = !1), (this.fT = !0);
          }),
          (WR360.ImageRotator.prototype.jK = function (gW) {
            if (null == gW || 0 == gW.length) this.dQ();
            else {
              var mW = WR360.ImageRotator.kR();
              try {
                var hy = getBrowserId(gW, mW);
              } catch (kV) {
                return void this.dQ();
              }
              if (null == hy || 0 == hy.length) this.dQ();
              else {
                gW = hy.split("^^");
                if (gW.length < 3) this.dQ();
                else if (((this.cr = gW[0]), 0 == this.cr.length)) this.dQ();
                else if (((this.cZ = gW[2]), 0 == this.cZ.length)) this.dQ();
                else {
                  mW = gW[1];
                  if (12 != mW.length) this.dQ();
                  else {
                    try {
                      for (
                        var an = this.cr + this.cZ, aa = 0, i = 0;
                        i < an.length;
                        i++
                      )
                        aa += an.charCodeAt(i);
                      var bD = mW.substr(0, 4);
                      if (aa != parseInt(bD, 16)) return void this.dQ();
                      var kS = mW.substr(6, 1),
                        kJ = Number(kS);
                      this.fQ = 1 == kJ;
                    } catch (kV) {
                      return void this.dQ();
                    }
                    this.gz() && 0 == this.az() ? this.dQ() : (this.fT = !1);
                  }
                }
              }
            }
          }),
          (WR360.ImageRotator.prototype.mz = function () {
            jQuery(this.iO).show();
          }),
          (WR360.ImageRotator.prototype.hD = function () {
            0 != this.oa && (clearInterval(this.oa), (this.oa = 0)),
              0 != this.pp && (clearInterval(this.pp), (this.pp = 0));
          }),
          (WR360.ImageRotator.prototype.oT = function () {
            jQuery(this.ft).remove(),
              (this.ft = this.pr + Date.now()),
              jQuery(
                this.oz.pg(this.ft.replace("#", ""), this.oG, this.hV, this.oD)
              )
                .appendTo(this.bp)
                .css({});
          }),
          (WR360.ImageRotator.prototype.nI = function () {
            var bn;
            jQuery(this.cl).is(":visible") ||
              (jQuery(this.cl).remove(),
              this.aL(),
              jQuery(this.cl).unbind(this.oO),
              this.bp.unbind(this.oO),
              this.bp.bind(this.oO, function (event) {
                ow(event);
              }),
              jQuery(this.cl).bind(this.oO, function (event) {
                ow(event);
              }),
              (bn = this),
              jQuery(this.cl).unbind("mousemove"),
              jQuery(this.cl).unbind("mouseout"),
              jQuery(this.cl).bind("mousemove", function (event) {
                bn.gT = !0;
              }),
              jQuery(this.cl).bind("mouseout", function (event) {
                bn.gT = !1;
              }));
          }),
          (WR360.ImageRotator.prototype.mY = function () {
            var configFileURL = this.fN;
            if (null != configFileURL && 0 < configFileURL.length) {
              var path,
                el = configFileURL.lastIndexOf("/");
              if (-1 != (el = -1 == el ? configFileURL.lastIndexOf("\\") : el))
                return (
                  null != (path = this.gf) &&
                  0 < path.length &&
                  (1 == this.ek() || !this.pL)
                    ? (this.rootPath = path)
                    : (this.rootPath = configFileURL.substr(0, el + 1)),
                  (this.nL = configFileURL.substr(el + 1)),
                  (this.jF = configFileURL),
                  !0
                );
            }
            return (this.jF = this.rootPath + this.nL), !0;
          }),
          (WR360.ImageRotator.prototype.ki = function () {
            var self = this;
            this.sm.cD(
              this.settings.eventTrackingAlias,
              this.settings.googleEventTracking,
              this.settings.pixriotEventTracking
                ? this.jF.replace(".xml", ".pxrtcont")
                : null,
              this.settings.eventTrackingCallback
            ),
              jQuery.ajax({
                type: "GET",
                url: this.jF,
                dataType: "xml",
                cache: !0,
                success: function (di) {
                  self.mO(di);
                },
                error: function (jk, fr, ec) {
                  self.mH(jk, fr, ec);
                },
              });
          }),
          (WR360.ImageRotator.prototype.dq = function () {
            this.settings.skin
              ? this.vh.addClass(this.settings.skin)
              : this.bA.settings.bI.skin &&
                this.vh.addClass(this.bA.settings.bI.skin),
              (this.cq = new WR360.lE(this.bA, this)),
              (this.eP = this.bA.settings.rotation.fE),
              0 < this.bA.aw.length &&
                null != this.bA.aw[0].cS &&
                (this.bV.lc = !0),
              1 == this.av
                ? this.vh.css({
                    "background-color": this.bA.settings.bI.fullScreenBackColor,
                  })
                : this.bp.css({ "background-color": this.tC }),
              0 < this.bA.settings.bI.customCursorClass.length &&
                this.bp.addClass(this.bA.settings.bI.customCursorClass),
              (this.eE = new WR360.cL(this)),
              this.eE.addEventListener(
                WR360.cO.COMPLETE,
                jQuery.proxy(this.lZ, this)
              ),
              this.eE.addEventListener(
                WR360.cO.ERROR,
                jQuery.proxy(this.lK, this)
              ),
              this.eE.Load(this.hj(), this.bA);
          }),
          (WR360.ImageRotator.prototype.lZ = function (e) {
            var eG,
              fg,
              e = e.image;
            function finalize() {
              var jM;
              !fg.control.pauseOnPreload ||
              eG.av ||
              eG.settings.fullScreenOnClick ||
              eG.dV
                ? eG.oB()
                : ((eG.gC = !0),
                  eG.cq.hide(),
                  0 < fg.bI.viewerHint.length &&
                    eG.bp
                      .find(".spinner_hint_item")
                      .html(fg.bI.viewerHint)
                      .css({ opacity: 1 }),
                  (jM = "mousedown touchstart"),
                  fg.control.resumePreloadOnHover && (jM += " mousemove"),
                  eG.bp.find(".spinner_hint").fadeIn(500, function () {
                    jQuery(this).on(jM, function (e) {
                      e.preventDefault(),
                        e.stopPropagation(),
                        jQuery(this).fadeOut(500, function () {
                          jQuery(this).off().remove(), eG.oB();
                        }),
                        (eG.gC = !1),
                        eG.cq.show(!1);
                    });
                  }));
            }
            e &&
              (this.jV(this.eE.image),
              this.bV.hs(e.src),
              (fg = (eG = this).bA.settings),
              this.dV
                ? (this.bd.show(), finalize())
                : this.bd.fadeIn(500, function () {
                    finalize();
                    var stub = eG.vh.find(".stub_banner_wrap");
                    0 < stub.length && stub.remove();
                  }));
          }),
          (WR360.ImageRotator.prototype.oB = function (e) {
            (this.bB = new WR360.dc()),
              0 == this.ek() && (this.bB.hu = WR360.ImageRotator.km),
              this.bB.addEventListener(
                WR360.dK.PROGRESS,
                jQuery.proxy(this.nN, this)
              ),
              this.bB.addEventListener(
                WR360.dK.ERROR,
                jQuery.proxy(this.pq, this)
              ),
              this.bB.addEventListener(
                WR360.dK.COMPLETE,
                jQuery.proxy(this.nZ, this)
              ),
              this.bB.Init(this.hj(), this.bA),
              (this.bU = new WR360.dP(this.cR)),
              this.bU.addEventListener(
                WR360.cf.PROGRESS,
                jQuery.proxy(this.mP, this)
              ),
              this.bU.addEventListener(
                WR360.cf.COMPLETE,
                jQuery.proxy(this.lP, this)
              ),
              this.bU.addEventListener(
                WR360.cf.ERROR,
                jQuery.proxy(this.ml, this)
              ),
              this.bU.Init(
                this.hj(),
                this.settings.graphicsPath,
                this.bA,
                this.av && this.bA.settings.control.qc && this.bV.lc
              ),
              (this.fX += this.bU.aw.length),
              (this.fX += this.bB.bF.length),
              this.bB.kD(),
              this.bU.kE(),
              this.toolbar.cD(),
              this.gk.css({ visibility: "visible" }).hide(),
              this.bA.settings.bI.showToolbarOnLoadStart &&
                (this.nx(), this.toolbar.mV(this.bA, this), this.gk.show()),
              (this.uI =
                this.uI || this.bA.settings.control.disableMouseControl);
          }),
          (WR360.ImageRotator.prototype.lK = function (e) {
            WR360.bZ.gA(e.errorMessage);
          }),
          (WR360.ImageRotator.prototype.mH = function (jk, fr, ec) {
            WR360.bZ.gA(
              "Could not load configuration file '" +
                this.fN +
                "': " +
                fr +
                ", " +
                ec.toString()
            );
          }),
          (WR360.ImageRotator.prototype.mO = function (di) {
            var kw,
              bW,
              V = this.bA,
              ip =
                (WR360.by.pA() &&
                  document.ad.msie &&
                  (di = jQuery.parseXML(di)),
                this.settings.configReadyCallback &&
                  (di = this.settings.configReadyCallback(
                    di,
                    this.av,
                    V.settings
                  )),
                jQuery(di).find("settings"));
            ip && 0 == ip.length
              ? WR360.bZ.gA("ERROR: Cannot read config section 'settings'.")
              : (jQuery(di)
                  .find("preloader")
                  .each(function () {
                    V.settings.eH.image = jQuery(this).attr("image");
                  }),
                jQuery(di)
                  .find("userInterface")
                  .each(function () {
                    (V.settings.bI.hb = WR360.by.bX(
                      jQuery(this).attr("showArrows"),
                      V.settings.bI.hb
                    )),
                      (V.settings.bI.gj = WR360.by.bX(
                        jQuery(this).attr("showTogglePlayButton"),
                        V.settings.bI.gj
                      )),
                      (V.settings.bI.gw = WR360.by.bX(
                        jQuery(this).attr("showZoomButtons"),
                        V.settings.bI.gw
                      )),
                      (V.settings.bI.iT = WR360.by.bX(
                        jQuery(this).attr("showFullScreenButton"),
                        V.settings.bI.iT
                      )),
                      (V.settings.bI.bY = WR360.by.bX(
                        jQuery(this).attr("showHotspotsButton"),
                        V.settings.bI.bY
                      )),
                      (V.settings.bI.iU = WR360.by.bX(
                        jQuery(this).attr("showToolTips"),
                        V.settings.bI.iU
                      )),
                      (V.settings.bI.bz = WR360.by.bX(
                        jQuery(this).attr("showProgressNumbers"),
                        V.settings.bI.bz
                      )),
                      (V.settings.bI.showProgressBar = WR360.by.bX(
                        jQuery(this).attr("showProgressBar"),
                        V.settings.bI.showProgressBar
                      )),
                      (V.settings.bI.showProgressPulse = WR360.by.bX(
                        jQuery(this).attr("showProgressPulse"),
                        V.settings.bI.showProgressPulse
                      )),
                      (V.settings.bI.gx = WR360.ImageRotator.nn(
                        jQuery(this).attr("toolbarAlign"),
                        V.settings.bI.gx
                      )),
                      (V.settings.bI.toolbarPosition = WR360.by.dM(
                        jQuery(this).attr("toolbarPosition"),
                        V.settings.bI.toolbarPosition
                      )),
                      (V.settings.bI.gH = WR360.by.cz(
                        jQuery(this).attr("toolbarBackColor"),
                        V.settings.bI.gH
                      )),
                      (V.settings.bI.iC = WR360.by.je(
                        jQuery(this).attr("toolbarAlpha"),
                        V.settings.bI.iC
                      )),
                      (V.settings.bI.gX = WR360.by.je(
                        jQuery(this).attr("toolbarBackAlpha"),
                        V.settings.bI.gX
                      )),
                      (V.settings.bI.fullScreenBackColor = WR360.by.cz(
                        jQuery(this).attr("fullScreenBackColor"),
                        V.settings.bI.fullScreenBackColor
                      )),
                      (V.settings.bI.showFullScreenToolbar = WR360.by.bX(
                        jQuery(this).attr("showFullScreenToolbar"),
                        V.settings.bI.showFullScreenToolbar
                      )),
                      (V.settings.bI.showToolbarOnLoadStart = WR360.by.bX(
                        jQuery(this).attr("showToolbarOnLoadStart"),
                        V.settings.bI.showToolbarOnLoadStart
                      )),
                      (V.settings.bI.customCursorClass = WR360.by.cz(
                        jQuery(this).attr("customCursorClass"),
                        V.settings.bI.customCursorClass
                      )),
                      (V.settings.bI.viewerHint = WR360.by.cz(
                        jQuery(this).attr("viewerHint"),
                        V.settings.bI.viewerHint
                      )),
                      (V.settings.bI.toolbarAutohide = WR360.by.bX(
                        jQuery(this).attr("toolbarAutohide"),
                        V.settings.bI.toolbarAutohide
                      )),
                      (V.settings.bI.skin = WR360.by.cz(
                        jQuery(this).attr("skin"),
                        V.settings.bI.skin
                      ));
                  }),
                jQuery(di)
                  .find("control")
                  .each(function () {
                    (V.settings.control.gp = WR360.by.je(
                      jQuery(this).attr("dragSpeed"),
                      V.settings.control.gp
                    )),
                      (V.settings.control.disableMouseControl = WR360.by.bX(
                        jQuery(this).attr("disableMouseControl"),
                        V.settings.control.disableMouseControl
                      )),
                      (V.settings.control.inBrowserFullScreen = WR360.by.bX(
                        jQuery(this).attr("inBrowserFullScreen"),
                        V.settings.control.inBrowserFullScreen
                      )),
                      (V.settings.control.doubleClickFullscreen = WR360.by.bX(
                        jQuery(this).attr("doubleClickFullscreen"),
                        V.settings.control.doubleClickFullscreen
                      )),
                      (V.settings.control.iu = WR360.by.bX(
                        jQuery(this).attr("doubleClickZooms"),
                        V.settings.control.iu
                      )),
                      (V.settings.control.qc = WR360.by.bX(
                        jQuery(this).attr("showHighresOnFullScreen"),
                        V.settings.control.qc
                      )),
                      (V.settings.control.mouseHoverDrag = WR360.by.bX(
                        jQuery(this).attr("mouseHoverDrag"),
                        V.settings.control.mouseHoverDrag
                      )),
                      (V.settings.control.hideHotspotsOnLoad = WR360.by.bX(
                        jQuery(this).attr("hideHotspotsOnLoad"),
                        V.settings.control.hideHotspotsOnLoad
                      )),
                      (V.settings.control.hideHotspotsOnZoom = WR360.by.bX(
                        jQuery(this).attr("hideHotspotsOnZoom"),
                        V.settings.control.hideHotspotsOnZoom
                      )),
                      (V.settings.control.rowSensitivity = WR360.by.dM(
                        jQuery(this).attr("rowSensitivity"),
                        V.settings.control.rowSensitivity
                      )),
                      (V.settings.control.dragSensitivity = WR360.by.dM(
                        jQuery(this).attr("dragSensitivity"),
                        V.settings.control.dragSensitivity
                      )),
                      (V.settings.control.zoomSteps = WR360.by.dM(
                        jQuery(this).attr("zoomSteps"),
                        V.settings.control.zoomSteps
                      )),
                      (V.settings.control.zoomSpeed = WR360.by.dM(
                        jQuery(this).attr("zoomSpeed"),
                        V.settings.control.zoomSpeed
                      )),
                      (V.settings.control.singleClickZooms = WR360.by.bX(
                        jQuery(this).attr("singleClickZooms"),
                        V.settings.control.singleClickZooms
                      )),
                      (V.settings.control.pauseOnPreload = WR360.by.bX(
                        jQuery(this).attr("pauseOnPreload"),
                        V.settings.control.pauseOnPreload
                      )),
                      (V.settings.control.resumePreloadOnHover = WR360.by.bX(
                        jQuery(this).attr("resumePreloadOnHover"),
                        V.settings.control.resumePreloadOnHover
                      )),
                      (V.settings.control.mouseWheelDrag = WR360.by.bX(
                        jQuery(this).attr("mouseWheelDrag"),
                        V.settings.control.mouseWheelDrag
                      )),
                      (V.settings.control.mouseWheelDragZoomOnly = WR360.by.bX(
                        jQuery(this).attr("mouseWheelDragZoomOnly"),
                        V.settings.control.mouseWheelDragZoomOnly
                      )),
                      (V.settings.control.allowPanX = WR360.by.bX(
                        jQuery(this).attr("allowPanX"),
                        V.settings.control.allowPanX
                      )),
                      (V.settings.control.allowPanY = WR360.by.bX(
                        jQuery(this).attr("allowPanY"),
                        V.settings.control.allowPanY
                      )),
                      (V.settings.control.allowRotateInputInZoom = WR360.by.bX(
                        jQuery(this).attr("allowRotateInputInZoom"),
                        V.settings.control.allowRotateInputInZoom
                      )),
                      (V.settings.control.dragAcceleration = WR360.by.je(
                        jQuery(this).attr("dragAcceleration"),
                        V.settings.control.dragAcceleration
                      )),
                      (V.settings.control.responsiveBaseWidth = WR360.by.dM(
                        jQuery(this).attr("responsiveBaseWidth"),
                        V.settings.control.responsiveBaseWidth
                      )),
                      (V.settings.control.centerZoom = WR360.by.bX(
                        jQuery(this).attr("centerZoom"),
                        V.settings.control.centerZoom
                      )),
                      (V.settings.control.maxZoom = WR360.by.dM(
                        jQuery(this).attr("maxZoom"),
                        V.settings.control.maxZoom
                      ));
                  }),
                jQuery(di)
                  .find("rotation")
                  .each(function () {
                    (V.settings.rotation.fE = WR360.by.cz(
                      jQuery(this).attr("firstImage"),
                      V.settings.rotation.fE
                    )),
                      (V.settings.rotation.rotate = WR360.by.cz(
                        jQuery(this).attr("rotate"),
                        V.settings.rotation.rotate
                      )),
                      (V.settings.rotation.kC = WR360.by.dM(
                        jQuery(this).attr("rotateDirection"),
                        V.settings.rotation.kC
                      )),
                      (V.settings.rotation.forceDirection = WR360.by.bX(
                        jQuery(this).attr("forceDirection"),
                        V.settings.rotation.forceDirection
                      )),
                      (V.settings.rotation.gg = WR360.by.dM(
                        jQuery(this).attr("rotatePeriod"),
                        V.settings.rotation.gg
                      )),
                      (V.settings.rotation.spinOnPageScroll = WR360.by.bX(
                        jQuery(this).attr("spinOnPageScroll"),
                        V.settings.rotation.spinOnPageScroll
                      )),
                      (V.settings.rotation.pageScrollPeriod = WR360.by.dM(
                        jQuery(this).attr("pageScrollPeriod"),
                        V.settings.rotation.pageScrollPeriod
                      )),
                      (V.settings.rotation.pageScrollDelay = WR360.by.dM(
                        jQuery(this).attr("pageScrollDelay"),
                        V.settings.rotation.pageScrollDelay
                      )),
                      (V.settings.rotation.pageScrollFollow = WR360.by.bX(
                        jQuery(this).attr("pageScrollFollow"),
                        V.settings.rotation.pageScrollFollow
                      )),
                      (V.settings.rotation.bounce = WR360.by.bX(
                        jQuery(this).attr("bounce"),
                        V.settings.rotation.bounce
                      )),
                      (V.settings.rotation.bounceRows = WR360.by.bX(
                        jQuery(this).attr("bounceRows"),
                        V.settings.rotation.bounceRows
                      )),
                      (V.settings.rotation.useInertia = WR360.by.bX(
                        jQuery(this).attr("useInertia"),
                        V.settings.rotation.useInertia
                      )),
                      (V.settings.rotation.autoPlayOnDragRelease = WR360.by.bX(
                        jQuery(this).attr("autoPlayOnDragRelease"),
                        V.settings.rotation.autoPlayOnDragRelease
                      )),
                      (V.settings.rotation.inertiaRelToDragSpeed = WR360.by.bX(
                        jQuery(this).attr("inertiaRelToDragSpeed"),
                        V.settings.rotation.inertiaRelToDragSpeed
                      )),
                      (V.settings.rotation.inertiaTimeToStop = WR360.by.dM(
                        jQuery(this).attr("inertiaTimeToStop"),
                        V.settings.rotation.inertiaTimeToStop
                      )),
                      (V.settings.rotation.inertiaMaxInterval = WR360.by.dM(
                        jQuery(this).attr("inertiaMaxInterval"),
                        V.settings.rotation.inertiaMaxInterval
                      )),
                      (V.settings.rotation.flipHorizontalInput = WR360.by.bX(
                        jQuery(this).attr("flipHorizontalInput"),
                        V.settings.rotation.flipHorizontalInput
                      )),
                      (V.settings.rotation.flipVerticalInput = WR360.by.bX(
                        jQuery(this).attr("flipVerticalInput"),
                        V.settings.rotation.flipVerticalInput
                      )),
                      (V.settings.rotation.rowsOnSingleIndex = WR360.by.bX(
                        jQuery(this).attr("rowsOnSingleIndex"),
                        V.settings.rotation.rowsOnSingleIndex
                      )),
                      (V.settings.rotation.flipAxis = WR360.by.bX(
                        jQuery(this).attr("flipAxis"),
                        V.settings.rotation.flipAxis
                      )),
                      (V.settings.rotation.label = WR360.by.cz(
                        jQuery(this).attr("label"),
                        V.settings.rotation.label
                      ));
                  }),
                (ip = jQuery(di).find("hotspots")) &&
                  0 < ip.length &&
                  ((kw = 0),
                  ip.each(function () {
                    jQuery(this)
                      .find("hotspot")
                      .each(function () {
                        var bi = new WR360.kc();
                        (bi.id = jQuery(this).attr("id").replace(/ /g, "_")),
                          (bi.renderMode = WR360.by.dM(
                            jQuery(this).attr("renderMode"),
                            bi.renderMode
                          )),
                          (bi.indicatorImage = WR360.by.cz(
                            jQuery(this).attr("indicatorImage"),
                            bi.indicatorImage
                          )),
                          (bi.disabled = WR360.by.bX(
                            jQuery(this).attr("disabled"),
                            bi.disabled
                          )),
                          (bi.wrap = WR360.by.bX(
                            jQuery(this).attr("wrap"),
                            bi.wrap
                          )),
                          (bi.activateOnClick = WR360.by.bX(
                            jQuery(this).attr("activateOnClick"),
                            bi.activateOnClick
                          )),
                          (bi.deactivateOnClick = WR360.by.bX(
                            jQuery(this).attr("deactivateOnClick"),
                            bi.deactivateOnClick
                          )),
                          (bi.effects = WR360.by.cz(
                            jQuery(this).attr("effects"),
                            bi.effects
                          )),
                          (bi.contentFadeIn = WR360.by.dM(
                            jQuery(this).attr("contentFadeIn"),
                            bi.contentFadeIn
                          )),
                          (bi.contentFadeOut = WR360.by.dM(
                            jQuery(this).attr("contentFadeOut"),
                            bi.contentFadeOut
                          )),
                          (bi.alwaysActive = WR360.by.dM(
                            jQuery(this).attr("alwaysActive"),
                            bi.alwaysActive
                          )),
                          (bi.minIndicatorScale = WR360.by.dM(
                            jQuery(this).attr("minIndicatorScale"),
                            bi.minIndicatorScale
                          )),
                          (bi.dummy = WR360.by.bX(
                            jQuery(this).attr("dummy"),
                            bi.hidden
                          )),
                          bi.offset.parse(
                            jQuery(this).attr("offsetX"),
                            jQuery(this).attr("offsetY")
                          ),
                          bi.margin.parse(jQuery(this).attr("margin")),
                          bi.align.parse(jQuery(this).attr("align")),
                          bi.clipStyle.parse(jQuery(this).attr("clipStyle")),
                          1 ==
                            WR360.by.bX(
                              jQuery(this).attr("absolutePosition"),
                              !1
                            ) && (bi.renderMode = WR360.kc.bf.au),
                          jQuery(this)
                            .find("spotinfo")
                            .each(function () {
                              (bi.hotspotInfo = new WR360.HotspotInfo()),
                                (bi.hotspotInfo.src = WR360.by.cz(
                                  jQuery(this).attr("src"),
                                  bi.hotspotInfo.src
                                )),
                                (bi.hotspotInfo.url = WR360.by.cz(
                                  jQuery(this).attr("url"),
                                  bi.hotspotInfo.url
                                )),
                                (bi.hotspotInfo.urlTarget = WR360.by.cz(
                                  jQuery(this).attr("urlTarget"),
                                  bi.hotspotInfo.urlTarget
                                )),
                                (bi.hotspotInfo.txt = WR360.by.cz(
                                  jQuery(this).attr("txt"),
                                  bi.hotspotInfo.txt
                                )),
                                (bi.hotspotInfo.txtWidth = WR360.by.dM(
                                  jQuery(this).attr("txtWidth"),
                                  bi.hotspotInfo.txtWidth
                                )),
                                (bi.hotspotInfo.txtColor = WR360.by.cz(
                                  jQuery(this).attr("txtColor"),
                                  bi.hotspotInfo.txtColor
                                )),
                                (bi.hotspotInfo.txtBkColor = WR360.by.cz(
                                  jQuery(this).attr("txtBkColor"),
                                  bi.hotspotInfo.txtBkColor
                                )),
                                (bi.hotspotInfo.fntHeight = WR360.by.dM(
                                  jQuery(this).attr("fntHeight"),
                                  bi.hotspotInfo.fntHeight
                                )),
                                (bi.hotspotInfo.imgWidth = WR360.by.dM(
                                  jQuery(this).attr("imgWidth"),
                                  bi.hotspotInfo.imgWidth
                                )),
                                (bi.hotspotInfo.imgWidthMin = WR360.by.dM(
                                  jQuery(this).attr("imgWidthMin"),
                                  bi.hotspotInfo.imgWidthMin
                                )),
                                (bi.hotspotInfo.imgBkColor = WR360.by.cz(
                                  jQuery(this).attr("imgBkColor"),
                                  bi.hotspotInfo.imgBkColor
                                )),
                                (bi.hotspotInfo.css = WR360.by.cz(
                                  jQuery(this).attr("css"),
                                  bi.hotspotInfo.css
                                )),
                                (bi.hotspotInfo.imgNoScale = WR360.by.bX(
                                  jQuery(this).attr("imgNoScale"),
                                  bi.hotspotInfo.imgNoScale
                                )),
                                (bi.hotspotInfo.lbxShowClose = WR360.by.bX(
                                  jQuery(this).attr("lbxShowClose"),
                                  bi.hotspotInfo.lbxShowClose
                                )),
                                (bi.hotspotInfo.lbxCloseColor = WR360.by.cz(
                                  jQuery(this).attr("lbxCloseColor"),
                                  bi.hotspotInfo.lbxCloseColor
                                )),
                                (bi.hotspotInfo.lbxBackCover = WR360.by.bX(
                                  jQuery(this).attr("lbxBackCover"),
                                  bi.hotspotInfo.lbxBackCover
                                )),
                                (bi.hotspotInfo.lbxClickActive = WR360.by.bX(
                                  jQuery(this).attr("lbxClickActive"),
                                  bi.hotspotInfo.lbxClickActive
                                )),
                                (bi.hotspotInfo.lbxPosition = WR360.by.cz(
                                  jQuery(this).attr("lbxPosition"),
                                  bi.hotspotInfo.lbxPosition
                                )),
                                (bi.hotspotInfo.clickAction = WR360.by.dM(
                                  jQuery(this).attr("clickAction"),
                                  bi.hotspotInfo.clickAction
                                )),
                                (bi.hotspotInfo.clickData = WR360.by.cz(
                                  jQuery(this).attr("clickData"),
                                  bi.hotspotInfo.clickData
                                )),
                                (bi.hotspotInfo.clickDataParam = WR360.by.cz(
                                  jQuery(this).attr("clickDataParam"),
                                  bi.hotspotInfo.clickDataParam
                                )),
                                bi.hotspotInfo.link.parse(
                                  jQuery(this).attr("link")
                                ),
                                jQuery(this)
                                  .find("cdata")
                                  .each(function () {
                                    bi.hotspotInfo.cdata = WR360.by.cz(
                                      jQuery(this).text(),
                                      bi.hotspotInfo.cdata
                                    );
                                  });
                            }),
                          0 == bi.disabled &&
                            ((V.bF[kw] = bi), (V.hi[bi.id] = bi), kw++);
                      });
                  }),
                  (ip = jQuery(di).find("images")) && 0 < ip.length
                    ? ((bW = 0),
                      ip.each(function () {
                        (V.aw.ep = WR360.by.dM(
                          jQuery(this).attr("highresWidth"),
                          V.aw.ep
                        )),
                          (V.aw.eU = WR360.by.dM(
                            jQuery(this).attr("highresHeight"),
                            V.aw.eU
                          )),
                          (V.aw.rows = WR360.by.dM(
                            jQuery(this).attr("rows"),
                            V.aw.rows
                          )),
                          jQuery(this)
                            .find("image")
                            .each(function () {
                              var dp = new WR360.lv(),
                                hO =
                                  ((dp.src = jQuery(this).attr("src")),
                                  (dp.label = WR360.by.cz(
                                    jQuery(this).attr("label"),
                                    dp.label
                                  )),
                                  (dp.delay = WR360.by.dM(
                                    jQuery(this).attr("delay"),
                                    dp.delay
                                  )),
                                  0);
                              jQuery(this)
                                .find("hotspot")
                                .each(function () {
                                  var al = new WR360.lq();
                                  (al.source = WR360.by.cz(
                                    jQuery(this).attr("source"),
                                    al.source
                                  )),
                                    (al.source = al.source.replace(/ /g, "_")),
                                    (al.offsetX = WR360.by.dM(
                                      jQuery(this).attr("offsetX"),
                                      null
                                    )),
                                    (al.offsetY = WR360.by.dM(
                                      jQuery(this).attr("offsetY"),
                                      null
                                    )),
                                    null === al.offsetX &&
                                      (al.clip.parse(
                                        WR360.by.cz(
                                          jQuery(this).attr("clip"),
                                          ""
                                        )
                                      ),
                                      jQuery(this)
                                        .find("point")
                                        .each(function () {
                                          al.clipPoints.push({
                                            x: WR360.by.dM(
                                              jQuery(this).attr("x"),
                                              0
                                            ),
                                            y: WR360.by.dM(
                                              jQuery(this).attr("y"),
                                              0
                                            ),
                                          });
                                        })),
                                    (dp.bF[hO] = al),
                                    (dp.hi[al.source] = al),
                                    hO++;
                                }),
                                jQuery(this)
                                  .find("highres")
                                  .each(function () {
                                    (dp.cS = new WR360.kB()),
                                      (dp.cS.src = WR360.by.cz(
                                        jQuery(this).attr("src"),
                                        dp.cS.src
                                      ));
                                  }),
                                (V.aw[bW] = dp),
                                (V.ky[dp.src] = dp),
                                bW++;
                            });
                      }),
                      this.dq())
                    : WR360.bZ.gA(
                        "ERROR: Cannot read config section 'images'."
                      )));
          }),
          (WR360.ImageRotator.prototype.mP = function (e) {
            this.dS();
          }),
          (WR360.ImageRotator.prototype.nN = function (e) {
            this.dS();
          }),
          (WR360.ImageRotator.prototype.lP = function (e) {
            this.dS(), this.jb(e);
          }),
          (WR360.ImageRotator.prototype.nZ = function (e) {
            this.dS(), this.jb(e);
          }),
          (WR360.ImageRotator.prototype.ml = function (e) {
            WR360.bZ.gA(e.errorMessage);
          }),
          (WR360.ImageRotator.prototype.pq = function (e) {
            WR360.bZ.gA(e.errorMessage);
          }),
          (WR360.ImageRotator.prototype.dS = function () {
            this.fs++;
            var kt = Math.round((this.fs / this.fX) * 100);
            this.cq.il(kt),
              null != this.settings.progressCallback &&
                this.settings.progressCallback(this.av, kt);
          }),
          (WR360.ImageRotator.prototype.jb = function (e) {
            if (!(this.qS() || this.fs < this.fX))
              try {
                var jq, eP, loadTime;
                this.cq.il(99),
                  this.jV(this.bU.aw[this.eP].F),
                  this.bV.cD(
                    this.bU,
                    this.bB,
                    this.bA,
                    this.dG,
                    this.dA,
                    this.aU,
                    this.bp
                  ),
                  this.dV && 0 <= this.reloadImageIndex
                    ? (0 <= this.reloadRowIndex &&
                        (this.bV.kl = this.reloadRowIndex),
                      this.bV.dE(this.reloadImageIndex))
                    : (!0 !== this.settings.fullScreenOnClick && this.qz()) ||
                      ((jq = this.bU.lU(this.bU.ty)),
                      (eP = parseInt(this.bA.settings.rotation.fE)) >
                        jq.length - 1 && (eP %= jq.length),
                      this.bV.dE(eP)),
                  this.cq.destroy(),
                  this.lo(),
                  this.dV
                    ? (this.bd.show(), this.ke())
                    : (this.bd.fadeIn(
                        600,
                        jQuery.proxy(function () {
                          this.ke();
                        }, this)
                      ),
                      this.bA.settings.rotation.spinOnPageScroll && this.us()),
                  this.settings.progressCallback &&
                    this.settings.progressCallback(this.av, 100),
                  this.settings.apiReadyCallback &&
                    !this.dV &&
                    this.settings.apiReadyCallback(
                      new WR360.API(this),
                      this.av,
                      this.settings.eventTrackingAlias
                    ),
                  this.dV &&
                    (this.reloadCallback && this.reloadCallback(),
                    this.settings.reloadCallback) &&
                    this.settings.reloadCallback(
                      { configFileURL: this.fN, rootPath: this.gf },
                      this.av
                    ),
                  0 !== this.rK &&
                    ((loadTime = Date.now() - this.rK),
                    this.gD() &&
                      this.sm.Event(
                        this.dV ? WR360.sY.rU.sc : WR360.sY.rU.sG,
                        loadTime
                      ),
                    (this.rK = 0)),
                  (this.dV = !1);
              } catch (ex) {
                WR360.bZ.gA("Exception: " + ex.message);
              }
          }),
          (WR360.ImageRotator.prototype.fK = function () {
            (this.bV.en = !0), this.bV.dE(this.bV.aF);
          }),
          (WR360.ImageRotator.prototype.ci = function () {
            return (
              (-1 == location.href.indexOf("https://") &&
                -1 == location.href.indexOf("http://")) ||
              -1 != location.href.indexOf("localhost") ||
              -1 != location.href.indexOf("127.0.0")
            );
          }),
          (WR360.ImageRotator.prototype.lo = function () {
            var lM;
            (this.dG = this.bU.aw[this.eP].F.width),
              (this.dA = this.bU.aw[this.eP].F.height),
              (this.loaded = !0),
              this.kY(),
              this.bA.settings.bI.showToolbarOnLoadStart ||
                (this.nx(), this.toolbar.mV(this.bA, this)),
              this.toolbar.Enable(this),
              this.qa && this.qa(),
              this.nt(),
              this.pS(),
              0 == this.ek() &&
                0 == this.ci() &&
                ((lM = this),
                setTimeout(function () {
                  lM.md();
                }, 2e3));
          }),
          (WR360.ImageRotator.prototype.gK = function (bi) {
            return bi.renderMode == WR360.kc.bf.au
              ? "wr360StaticSpot_" + ax + "_" + this.oY
              : "wr360DynamicSpot_" + bi.id + "_" + this.oY;
          }),
          (WR360.ImageRotator.prototype.mU = function () {
            this.bV.qG();
          }),
          (WR360.ImageRotator.prototype.nt = function () {
            var bn = this;
            0 == bn.dV &&
              (this.bp.bind("selectstart", function (event) {
                bn.na(event);
              }),
              this.bp.bind("mousemove", function (event) {
                bn.onMouseMove(event);
              }),
              this.bp.bind("mousedown", function (event) {
                bn.onMouseDown(event);
              }),
              this.bp.bind("mouseup", function (event) {
                bn.onMouseUp(event);
              }),
              this.bp.bind("mouseleave", function (event) {
                bn.onMouseLeave(event);
              }),
              this.bA.settings.control.mouseWheelDrag &&
                this.bp.bind("wheel", function (event) {
                  bn.onMouseWheel(event);
                }),
              this.bd.bind("dblclick", function (event) {
                bn.lJ(event, this);
              }),
              this.bd.bind("touchend", function (event) {
                bn.mr(event, this);
              }),
              this.bd.on("dragstart", function (event) {
                event.preventDefault();
              }),
              this.bp.bind(this.oO, function (event) {
                ow(event);
              }),
              jQuery(this.cl).bind(this.oO, function (event) {
                ow(event);
              }),
              this.bp.bind("touchstart", function (event) {
                bn.mk(event);
              }),
              this.bp.bind("touchmove", function (event) {
                bn.nm(event);
              }),
              this.bp.bind("touchend", function (event) {
                bn.mL(event);
              }),
              this.bp.bind("touchcancel", function () {
                bn.ma(event);
              }),
              jQuery(this.cl).bind("mouseover", function (event) {
                bn.gT = !0;
              }),
              jQuery(this.cl).bind("mouseout", function (event) {
                bn.gT = !1;
              })),
              0 == bn.ek() &&
                (1 == this.nl()
                  ? jQuery(this.ft).remove()
                  : bn.oa ||
                    (bn.oa = setInterval(function () {
                      bn.oT();
                    }, 2e3))),
              bn.pp ||
                this.gz() ||
                (bn.pp = setInterval(function () {
                  bn.nI();
                }, 5e3));
          }),
          (WR360.ImageRotator.prototype.nx = function () {
            var bn = this;
            0 == bn.dV &&
              (jQuery(this.sR).bind({
                mousedown: function () {
                  bn.tj();
                },
                mouseup: function () {
                  bn.rq();
                },
                mouseout: function () {
                  bn.rM();
                },
              }),
              jQuery(this.sj).bind({
                mousedown: function () {
                  bn.sQ();
                },
                mouseup: function () {
                  bn.so();
                },
                mouseout: function () {
                  bn.sC();
                },
              }),
              jQuery(this.gU).bind({
                mousedown: function () {
                  bn.np();
                },
                mouseup: function () {
                  bn.nr();
                },
                mouseout: function () {
                  bn.lY();
                },
              }),
              jQuery(this.hd).bind({
                mousedown: function () {
                  bn.nv();
                },
                mouseup: function () {
                  bn.mT();
                },
                mouseout: function () {
                  bn.mK();
                },
              }),
              jQuery(this.jA).bind({
                mousedown: function (event) {
                  bn.mt(event);
                },
              }),
              jQuery(this.kp).bind({
                click: function (event) {
                  bn.mf(event);
                },
              }),
              jQuery(this.pQ).bind({
                click: function (event) {
                  bn.rc && bn.rc(event);
                },
              }),
              (this.dN = new WR360.ej(
                this.jA.replace("#", ""),
                "zoomin_button",
                "zoomout_button"
              )),
              (this.bY = new WR360.cP(
                this.kp.replace("#", ""),
                "hotspotson_button",
                "hotspotsoff_button"
              )),
              (this.qZ = new WR360.cP(
                this.pQ.replace("#", ""),
                "fullscreenon_button",
                "fullscreenoff_button"
              )),
              (this.eg = new WR360.fb(
                this.jD.replace("#", ""),
                "click",
                this,
                "play_button",
                bn.mR,
                "pause_button",
                bn.mp,
                500
              )),
              this.eg.cD(),
              this.gk.mousedown(function (event) {
                bn.nj(event);
              }),
              this.gk.mousemove(function (event) {
                bn.nD(event);
              }),
              this.gk.mouseleave(function (event) {
                bn.oj(event);
              })),
              this.ih(!this.bA.settings.control.hideHotspotsOnLoad);
          }),
          (WR360.ImageRotator.prototype.pS = function () {
            var ratio;
            this.pW && this.pW()
              ? this.bV && this.bV.eh(this.bV.aF, !1)
              : (this.kI(!1),
                (this.fm = this.vh.innerWidth()),
                0 == this.settings.responsiveBaseWidth
                  ? ((this.fJ = this.vh.innerHeight()),
                    this.bp.css({ width: this.fm, height: this.fJ }),
                    this.bA.settings.control.responsiveBaseWidth
                      ? (this.lB =
                          this.fm /
                          this.bA.settings.control.responsiveBaseWidth)
                      : (this.lB = 1))
                  : ((ratio = this.iR / this.settings.responsiveBaseWidth),
                    (this.fJ = this.fm * ratio),
                    this.fJ < this.settings.responsiveMinHeight &&
                      (this.fJ = this.settings.responsiveMinHeight),
                    this.bp.css({ width: this.fm, height: this.fJ }),
                    this.vh.css({ height: this.fJ }),
                    this.vh.parent().css({ height: this.fJ }),
                    (this.lB = this.fm / this.settings.responsiveBaseWidth)),
                null != this.bV &&
                  (this.gs(), null != this.bV.H) &&
                  (this.bV.eh(this.bV.aF, !this.av), (this.bV.lB = this.lB)));
          }),
          (WR360.ImageRotator.prototype.gs = function () {
            var cW = this.bp.innerWidth(),
              dk = this.bp.innerHeight(),
              ks = this.dA / this.dG,
              fB = 0,
              cw = 0,
              fa = 0,
              fF = 0,
              hE = !1;
            this.dG < cW && this.dA < dk
              ? ((fB = this.dG),
                (cw = this.dA),
                (fa = (cW - this.dG) / 2),
                (fF = (dk - this.dA) / 2),
                (hE = !0))
              : (fF =
                  ks <= dk / cW
                    ? ((fa = 0),
                      (dk - (cw = ((fB = cW) / this.dG) * this.dA)) / 2)
                    : ((fa = (cW - (fB = ((cw = dk) / this.dA) * this.dG)) / 2),
                      0)),
              this.bp.css("text-align", "left"),
              this.bd.css("margin-left", fa),
              this.bd.css("margin-top", fF),
              this.bd.css("width", fB),
              this.bd.css("height", cw),
              (this.aU["_viewPort.x"] = fa),
              (this.aU["_viewPort.y"] = fF),
              (this.aU["_viewPort.width"] = fB),
              (this.aU["_viewPort.height"] = cw),
              this.bA.iq() &&
                (this.bV.dZ = this.bA.aw.ep / this.aU["_viewPort.width"]),
              (hE =
                (!(this.av && this.bA.settings.control.qc && this.bV.lc) &&
                  this.bV.lc) ||
                ((ks = this.mJ()), this.dG * ks >= cW) ||
                this.dA * ks >= dk
                  ? !1
                  : hE)
                ? this.bp.addClass("container_zoomoff")
                : this.bp.removeClass("container_zoomoff");
          }),
          (WR360.ImageRotator.prototype.vd = function () {
            return this.bp.hasClass("container_zoomoff");
          }),
          "AQIDBAUGBwgJAA"),
        kZ =
          ((WR360.ImageRotator.prototype.aP = function () {
            0 == this.dV &&
              (this.bp.append(this.ap),
              jQuery(this.cl).append(this.aY),
              jQuery(this.cB).append(this.bj),
              jQuery(this.cB).append(this.aQ));
          }),
          (WR360.ImageRotator.prototype.aL = function () {
            var eZ = "",
              gn = this.gu;
            if (
              (this.mz(),
              this.aP(),
              this.ek()
                ? null != this.cr &&
                  0 < this.cr.length &&
                  (eZ = this.gz() ? this.cr + " &copy;" : this.ju + this.cr)
                : (gn = this.gF),
              0 != eZ.length)
            ) {
              var ij = "";
              if (null != this.cZ && 0 < this.cZ.length)
                if (this.gz() && -1 == this.cZ.indexOf(".")) {
                  if (this.ci())
                    return (
                      jQuery(this.eN).html(this.bc.pg("", eZ)),
                      void jQuery(this.eQ).hide()
                    );
                  ij = document.location.hostname;
                } else ij = this.cZ;
              jQuery(this.eN).html(this.bc.pg(ij, eZ));
            } else jQuery(this.eN).hide();
            this.gz()
              ? jQuery(this.eQ).hide()
              : jQuery(this.eQ).html(this.bc.pg(this.hV, gn));
          }),
          (WR360.ImageRotator.prototype.jV = function (image) {
            (this.dG = image.width), (this.dA = image.height), this.pS();
          }),
          (WR360.ImageRotator.prototype.ng = function () {
            var fB = this.aU["_viewPort.width"];
            return fB > this.dG ? 1 : this.dG / fB;
          }),
          (WR360.ImageRotator.prototype.mJ = function () {
            return (
              ((0 == this.bV.dZ ? this.ng() : this.bV.dZ) *
                this.bA.settings.control.maxZoom) /
              100
            );
          }),
          (WR360.ImageRotator.prototype.kY = function () {
            0 < this.bU.sM() &&
              0 < this.bA.settings.rotation.gg &&
              ((this.eo = (this.bA.settings.rotation.gg / this.bU.sM()) * 1e3),
              (this.O = this.eo),
              0 < this.bA.settings.control.gp) &&
              (this.O *= this.bA.settings.control.gp);
          }),
          (WR360.ImageRotator.prototype.mR = function (e) {
            this.gJ(), 1 == this.gD() && this.sm.Event(WR360.sY.rU.rQ);
          }),
          (WR360.ImageRotator.prototype.mp = function (e) {
            this.cJ();
          }),
          (WR360.ImageRotator.prototype.nr = function (e) {
            this.co();
          }),
          (WR360.ImageRotator.prototype.lY = function (e) {
            0 == this.pY && this.co();
          }),
          (WR360.ImageRotator.prototype.np = function (e) {
            this.bV.eT(),
              this.cJ(),
              this.co(),
              (this.nX = !1),
              (this.rI = !1),
              (this.hl = !0);
            var bu = this;
            (this.ak = setTimeout(function () {
              bu.jz();
            }, this.bw)),
              1 == this.gD() && this.sm.Event(WR360.sY.rU.sP);
          }),
          (WR360.ImageRotator.prototype.rq = function (e) {
            this.co();
          }),
          (WR360.ImageRotator.prototype.rM = function (e) {
            0 == this.pY && this.co();
          }),
          (WR360.ImageRotator.prototype.tj = function (e) {
            this.bV.uK(),
              this.co(),
              (this.nX = !1),
              (this.rI = !0),
              (this.hl = !1);
            var bu = this;
            (this.ak = setTimeout(function () {
              bu.jz();
            }, this.bw)),
              1 == this.gD() && this.sm.Event(WR360.sY.rU.sP);
          }),
          (WR360.ImageRotator.prototype.mt = function (e) {
            this.vd() || this.jL(!1, e);
          }),
          (WR360.ImageRotator.prototype.mK = function (e) {
            0 == this.pY && this.co();
          }),
          (WR360.ImageRotator.prototype.nv = function (e) {
            this.bV.fo(),
              this.cJ(),
              this.co(),
              (this.nX = !1),
              (this.rI = !1),
              (this.hl = !1);
            var bu = this;
            (this.ak = setTimeout(function () {
              bu.jz();
            }, this.bw)),
              1 == this.gD() && this.sm.Event(WR360.sY.rU.sP);
          }),
          (WR360.ImageRotator.prototype.mT = function (e) {
            this.co();
          }),
          (WR360.ImageRotator.prototype.so = function (e) {
            this.co();
          }),
          (WR360.ImageRotator.prototype.sC = function (e) {
            0 == this.pY && this.co();
          }),
          (WR360.ImageRotator.prototype.sQ = function (e) {
            this.bV.ta(),
              this.co(),
              (this.nX = !0),
              (this.rI = !1),
              (this.hl = !1);
            var bu = this;
            (this.ak = setTimeout(function () {
              bu.jz();
            }, this.bw)),
              1 == this.gD() && this.sm.Event(WR360.sY.rU.sP);
          }),
          (WR360.ImageRotator.prototype.mf = function (e) {
            this.R ||
              (1 == this.db ? this.lz() : this.iV(),
              1 == this.gD() && this.sm.Event(WR360.sY.rU.sk));
          }),
          (WR360.ImageRotator.prototype.nj = function (e) {
            e.stopPropagation(), e.preventDefault();
            e =
              e.target &&
              e.target.className &&
              0 === e.target.className.indexOf("hotspot");
            this.dispatchEvent(
              new WR360.Event(WR360.Events.hG, !1, !1, e ? "toggle" : null)
            );
          }),
          (WR360.ImageRotator.prototype.nD = function (e) {
            this.kU = !0;
          }),
          (WR360.ImageRotator.prototype.oj = function (e) {
            this.kU = !1;
          }),
          (WR360.ImageRotator.prototype.na = function (e) {
            e.preventDefault(), e.stopPropagation();
          }),
          (WR360.ImageRotator.prototype.onMouseWheel = function (e) {
            (0 == this.av &&
              1 == this.bA.settings.control.mouseWheelDragZoomOnly &&
              0 == this.dn) ||
              (e.stopPropagation(),
              e.preventDefault(),
              this.cJ(),
              0 < e.originalEvent.deltaY ? this.bV.eT() : this.bV.fo());
          }),
          (WR360.ImageRotator.prototype.onMouseDown = function (e) {
            e.stopPropagation(),
              e.preventDefault(),
              e.button ==
              (function () {
                if (
                  document.ad.msie &&
                  parseInt(document.ad.version.substring(0, 1)) < 9 &&
                  "." == document.ad.version.substring(1, 2)
                )
                  return 1;
                return 0;
              })()
                ? (this.pm(e), this.uI || this.kx(e))
                : 2 != e.button || WR360.by.fU || this.gz() || this.nP(e);
          }),
          (WR360.ImageRotator.prototype.jB = function (e) {
            var e = WR360.by.fS(e);
            (this.dO = this.bA.settings.rotation.flipHorizontalInput
              ? -e.x
              : e.x),
              (this.ei = this.bA.settings.rotation.flipVerticalInput
                ? -e.y
                : e.y),
              (this.hA = e),
              (this.tQ = e),
              this.bA.settings.rotation.flipAxis &&
                ((e = this.dO), (this.dO = this.ei), (this.ei = e));
          }),
          (WR360.ImageRotator.prototype.kx = function (e) {
            this.dispatchEvent(
              new WR360.Event(WR360.ImageRotator.Events.ve, !1, !1, {
                type: "drag",
                action: "dragStart",
              })
            ),
              (this.fu = !0),
              (this.ri = !0),
              this.cJ(),
              this.sq(),
              (this.eu = !0),
              (this.sI = Date.now()),
              (this.po = this.sI),
              (e = e || window.event);
            var e = WR360.by.fS(e);
            (this.dO = this.bA.settings.rotation.flipHorizontalInput
              ? -e.x
              : e.x),
              (this.ei = this.bA.settings.rotation.flipVerticalInput
                ? -e.y
                : e.y),
              (this.hA = e),
              (this.tQ = e),
              this.bA.settings.rotation.flipAxis &&
                ((e = this.dO), (this.dO = this.ei), (this.ei = e)),
              (this.jW = this.bV.aG.css("margin-left").gO()),
              (this.jt = this.bV.aG.css("margin-top").gO()),
              (this.nB = this.bV.ob());
          }),
          "AgMEBQYHCAkAAQI=");
      function ow(e) {
        e.preventDefault();
      }
      (WR360.ImageRotator.prototype.su = function () {
        1 == this.eu &&
          0 != this.sI &&
          (1 == this.gD() &&
            this.sm.Event(WR360.sY.rU.rC, Date.now() - this.sI),
          this.dispatchEvent(
            new WR360.Event(WR360.ImageRotator.Events.ve, !1, !1, {
              type: "drag",
              action: "dragStop",
            })
          )),
          (this.sI = 0);
      }),
        (WR360.ImageRotator.prototype.sq = function () {
          0 == this.eu &&
            0 != this.rZ &&
            1 == this.gD() &&
            this.sm.Event(WR360.sY.rU.rW, Date.now() - this.rZ),
            (this.rZ = 0);
        }),
        (WR360.ImageRotator.prototype.onMouseUp = function (e, nF) {
          this.uI ||
            this.dV ||
            (this.su(),
            !this.bA.settings.control.singleClickZooms ||
              this.vd() ||
              nF ||
              (Date.now() - this.po < 200 &&
                this.nB == this.bV.ob() &&
                (!this.fu ||
                  jQuery(e.target).closest(".theme_panel")[0] ||
                  (0 == this.dO && 0 == this.ei) ||
                  (this.jL(!0), e.preventDefault()))),
            (this.fu = !1),
            (this.eu = !1),
            this.ff());
        }),
        (WR360.ImageRotator.prototype.onMouseLeave = function (e) {
          this.uI ||
            this.dV ||
            (this.su(), this.sq(), (this.fu = !1), (this.eu = !1), this.ff());
        }),
        (WR360.ImageRotator.prototype.lJ = function (e, target) {
          e.stopPropagation(),
            e.preventDefault(),
            this.uI ||
              this.dV ||
              (this.bA.settings.control.doubleClickFullscreen
                ? this.rc(e)
                : this.bA.settings.control.iu &&
                  !this.vd() &&
                  this.jL(!0, e, target));
        }),
        (WR360.ImageRotator.prototype.onMouseMove = function (e) {
          var temp;
          this.qS() ||
            this.uI ||
            this.dV ||
            ((e = WR360.by.fS(e || window.event)),
            (this.cp = this.bA.settings.rotation.flipHorizontalInput
              ? -e.x
              : e.x),
            (this.ha = this.bA.settings.rotation.flipVerticalInput
              ? -e.y
              : e.y),
            (this.uz = e.x),
            (this.uf = e.y),
            (this.hA = e),
            this.bA.settings.rotation.flipAxis &&
              ((temp = this.cp), (this.cp = this.ha), (this.ha = temp)),
            (this.hg += Math.abs(this.cp - this.dO)),
            (this.qe += Math.abs(this.ha - this.ei)),
            this.eu || 0 != this.rZ || (this.rZ = Date.now()),
            this.eu || this.bA.settings.control.mouseHoverDrag
              ? !this.eu &&
                this.bA.settings.control.mouseHoverDrag &&
                (this.pY || this.dn || this.kU)
                ? ((this.dO = this.cp), (this.ei = this.ha))
                : this.bA.settings.control.allowRotateInputInZoom && this.dn
                ? (this.kF(), this.R || this.nq())
                : this.qY
                ? this.kF()
                : (this.ff(), this.R || this.nq())
              : ((this.dO = this.cp), (this.ei = this.ha), (this.tQ = e)));
        }),
        (WR360.ImageRotator.prototype.qO = function (marginLeft, marginTop) {
          return (
            marginLeft < this.eL.eY
              ? (marginLeft = this.eL.eY)
              : marginLeft > this.eL.fd && (marginLeft = this.eL.fd),
            marginTop < this.eL.ev
              ? (marginTop = this.eL.ev)
              : marginTop > this.eL.fM && (marginTop = this.eL.fM),
            { marginLeft: marginLeft, marginTop: marginTop }
          );
        }),
        (WR360.ImageRotator.prototype.nq = function () {
          var pK = this.qO(
            this.jW + (this.uz - this.tQ.x),
            this.jt + (this.uf - this.tQ.y)
          );
          this.bV.aG.css(
            "margin-left",
            this.bA.settings.control.allowPanX ? pK.marginLeft : this.jW
          ),
            this.bV.aG.css(
              "margin-top",
              this.bA.settings.control.allowPanY ? pK.marginTop : this.jt
            ),
            this.bV.fP();
        }),
        (WR360.ImageRotator.prototype.mk = function (e) {
          this.uI ||
            this.dV ||
            ((this.eS = Date.now()),
            (this.eO = this.hg),
            this.kx(e),
            e.stopPropagation());
        }),
        (WR360.ImageRotator.prototype.mr = function (e, target) {
          var now;
          this.uI ||
            this.dV ||
            ((now = Date.now()) - this.fY < 300
              ? (this.lJ(e, target), this.onMouseUp(e, !0))
              : ((this.fY = now),
                e.target &&
                  e.target.className &&
                  0 === e.target.className.indexOf("panning") &&
                  e.preventDefault()));
        }),
        (WR360.ImageRotator.prototype.mL = function (e) {
          this.uI ||
            this.dV ||
            (this.onMouseUp(e), this.oC(), e.stopPropagation());
        }),
        (WR360.ImageRotator.prototype.nm = function (e) {
          var qg, qK;
          this.uI ||
            this.dV ||
            ((qg = this.hg),
            (qK = this.qe),
            this.onMouseMove(e),
            (8 < this.hg - qg && this.qe - qK < 20) ||
            1 == this.av ||
            1 == this.dn ||
            (1 < this.bA.aw.rows && 0 < this.bA.settings.control.rowSensitivity)
              ? e.preventDefault()
              : (this.ri = !0),
            e.stopPropagation());
        }),
        (WR360.ImageRotator.prototype.ma = function (e) {
          this.uI ||
            this.dV ||
            (this.onMouseLeave(e), (this.ri = !0), e.stopPropagation());
        }),
        (WR360.ImageRotator.prototype.qV = function () {
          var self = this;
          function unsubscribeTracking() {
            self.bp.off("touchstart.toolbarAutoHide"),
              self.bp.off("mousemove.toolbarAutoHide"),
              self.bp.off("mouseleave.toolbarAutoHide");
          }
          unsubscribeTracking(),
            this.bp.on("touchstart.toolbarAutoHide", function () {
              self.loaded &&
                1 == self.bA.settings.bI.toolbarAutohide &&
                (self.gk.fadeIn(400),
                self.nb.fadeIn(400),
                unsubscribeTracking());
            }),
            this.bp.on("mousemove.toolbarAutoHide", function () {
              0 == self.canShowAutoToolbar &&
                ((self.canShowAutoToolbar = !0),
                0 != self.jN && (clearTimeout(self.jN), (self.jN = 0)),
                self.loaded) &&
                1 == self.bA.settings.bI.toolbarAutohide &&
                (self.gk.fadeIn(400), self.nb.fadeIn(400));
            }),
            this.bp.on("mouseleave.toolbarAutoHide", function () {
              1 == self.canShowAutoToolbar &&
                ((self.canShowAutoToolbar = !1),
                (self.jN = setTimeout(function () {
                  clearTimeout(self.jN),
                    (self.jN = 0),
                    self.loaded &&
                      1 == self.bA.settings.bI.toolbarAutohide &&
                      (self.gk.fadeOut(400), self.nb.fadeOut(400));
                }, 1e3)));
            });
        }),
        (WR360.ImageRotator.prototype.fO = function () {
          this.gQ = this.bA.settings.rotation.bounce
            ? 2 * this.bU.sM() - 2
            : this.bU.sM();
        }),
        (WR360.ImageRotator.prototype.ke = function () {
          var rotateMode = this.bA.settings.rotation.rotate;
          switch (rotateMode) {
            case "false":
              return;
            case "once":
              this.fO(), this.gJ();
              break;
            case "true":
              this.gJ();
              break;
            default:
              var uF = this.bA.settings.rotation.label;
              rotateMode && uF && this.bV.qB(rotateMode, new WR360.uH(uF));
          }
        }),
        (WR360.ImageRotator.prototype.us = function () {
          var tA = 0,
            vc = 0,
            rotationCfg = this.bA.settings.rotation;
          jQuery(window).on(
            "scroll",
            jQuery.proxy(function () {
              var scrollTop, self;
              this.eu ||
                this.pY ||
                (rotationCfg.pageScrollFollow &&
                  ((scrollTop =
                    window.pageYOffset || document.documentElement.scrollTop),
                  (this.bV.he = vc < scrollTop ? 1 : -1),
                  (vc = scrollTop <= 0 ? 0 : scrollTop)),
                0 === rotationCfg.pageScrollPeriod
                  ? this.qm()
                  : ((this.ri = !0),
                    clearInterval(tA),
                    this.co(),
                    this.gJ(rotationCfg.pageScrollPeriod),
                    (self = this),
                    (tA = setInterval(function () {
                      self.cJ(), clearInterval(tA);
                    }, rotationCfg.pageScrollDelay))));
            }, this)
          );
        }),
        (WR360.ImageRotator.prototype.kF = function () {
          var bu, nH;
          0 == this.fl &&
            (((bu = this).fl = setInterval(function () {
              bu.lN();
            }, this.O)),
            (nH = Date.now()),
            (this.eS = nH),
            (this.eO = this.hg),
            (this.tF = nH),
            (this.ts = 1));
        }),
        (WR360.ImageRotator.prototype.ff = function () {
          0 != this.fl && (clearInterval(this.fl), (this.fl = 0), this.oC());
        }),
        (WR360.ImageRotator.prototype.lp = function () {
          this.nJ = 500;
        }),
        (WR360.ImageRotator.prototype.oC = function () {
          if (
            this.dn &&
            !(
              this.bA.settings.control.allowRotateInputInZoom &&
              !this.bA.settings.control.allowPanX
            )
          )
            return;
          (this.ri = !1),
            (this.eS = Date.now() - this.eS),
            (this.eO = this.hg - this.eO);
          var gp = this.eO / this.eS,
            canInertia = 0.1 < gp && this.nJ < 120;
          this.bA.settings.rotation.useInertia && canInertia
            ? this.qM(0, gp)
            : this.bA.settings.rotation.autoPlayOnDragRelease &&
              0 < this.eO &&
              this.gJ();
        }),
        (WR360.ImageRotator.prototype.qM = function (startTime, pu) {
          var ox = this.O;
          if (0 < startTime) {
            var pI =
                1 == this.bA.settings.rotation.inertiaRelToDragSpeed
                  ? this.bA.settings.rotation.inertiaTimeToStop * pu
                  : this.bA.settings.rotation.inertiaTimeToStop,
              py = this.bA.settings.rotation.inertiaMaxInterval,
              nH = Date.now() - startTime;
            if (py < (ox = py * (nH /= pI) * nH + this.O))
              return void (
                this.bA.settings.rotation.autoPlayOnDragRelease && this.gJ()
              );
          } else startTime = Date.now();
          var bu = this;
          setTimeout(function () {
            bu.ri || (bu.qf(), bu.qM(startTime, pu));
          }, ox);
        }),
        (WR360.ImageRotator.prototype.me = function () {
          this.gy++ === this.gQ ? (this.cJ(), this.gb && this.gb()) : this.ql();
        }),
        (WR360.ImageRotator.prototype.qm = function () {
          var oM = -1 == this.bA.settings.rotation.kC ? 1 : -1;
          this.bV.he === oM
            ? this.bV.eT() || this.bV.fo()
            : this.bV.fo() || this.bV.eT();
        }),
        (WR360.ImageRotator.prototype.qf = function () {
          this.qm();
        }),
        (WR360.ImageRotator.prototype.ql = function () {
          this.pY && this.qm();
        }),
        (WR360.ImageRotator.prototype.gJ = function (gg) {
          var bu;
          this.pY ||
            (this.eg.ji(!0),
            (this.pY = !0),
            (this.gy = 0),
            (gg = gg ? (gg / this.bU.sM()) * 1e3 : this.eo),
            ((bu = this).fq = setInterval(function () {
              bu.me();
            }, gg)));
        }),
        (WR360.ImageRotator.prototype.cJ = function () {
          this.pY &&
            (this.eg.ji(!1),
            (this.pY = !1),
            (this.gQ = -1),
            (this.gy = 0),
            this.fq) &&
            (clearInterval(this.fq), (this.fq = 0));
        }),
        (WR360.ImageRotator.prototype.co = function () {
          0 != this.ak && (clearTimeout(this.ak), (this.ak = 0)),
            0 != this.aV && (clearInterval(this.aV), (this.aV = 0));
        }),
        (WR360.ImageRotator.prototype.jz = function () {
          var bu = this;
          this.aV = setInterval(function () {
            bu.iJ();
          }, this.O);
        }),
        (WR360.ImageRotator.prototype.lN = function () {
          this.nJ += this.O;
          var tE,
            tc = 1 < this.bU.sd(),
            dragSensitivity = this.bA.settings.control.dragSensitivity,
            uY =
              this.bA.settings.control.allowRotateInputInZoom &&
              !this.bA.settings.control.allowPanX &&
              this.dn;
          0 ==
            ((1 == tc || uY) &&
              0 < dragSensitivity &&
              Math.abs(this.cp - this.dO) < dragSensitivity) &&
            (this.cp != this.dO && (this.nJ = 0),
            (uY = 1) < this.bA.settings.control.dragAcceleration &&
              this.cp != this.dO &&
              0 < (dragSensitivity = Date.now() - this.tF) &&
              ((tE = Math.abs(this.cp - this.dO)),
              (uY =
                (this.ts +
                  Math.ceil(
                    (this.bA.settings.control.dragAcceleration * tE) /
                      dragSensitivity
                  )) /
                2)),
            this.cp > this.dO
              ? this.bV.fo(uY)
              : this.cp < this.dO && this.bV.eT(uY),
            (this.dO = this.cp),
            (this.tF = Date.now()),
            (this.ts = uY),
            this.bA.settings.rotation.rowsOnSingleIndex) &&
            (this.ei = this.ha),
            1 == tc &&
              0 < (tE = this.bA.settings.control.rowSensitivity) &&
              ((dragSensitivity = !1),
              tE < (uY = this.ha - this.ei)
                ? (this.bV.ta(), (dragSensitivity = !0))
                : uY < -tE && (this.bV.uK(), (dragSensitivity = !0)),
              1 == dragSensitivity) &&
              ((this.ei = this.ha),
              this.bA.settings.rotation.rowsOnSingleIndex) &&
              (this.dO = this.cp);
        }),
        (WR360.ImageRotator.prototype.iJ = function () {
          this.rI
            ? this.bV.uK()
            : this.nX
            ? this.bV.ta()
            : this.hl
            ? this.bV.eT()
            : this.bV.fo();
        }),
        (WR360.ImageRotator.prototype.hc = function (show) {
          null != this.settings.progressCallback
            ? this.settings.progressCallback(this.av, -1, show)
            : show
            ? this.cq.show(!0)
            : this.cq.hide();
        }),
        (WR360.lE = function (V, bh) {
          var V = V.settings.bI,
            showProgressBar = V.showProgressBar,
            showProgressNum = showProgressBar && V.bz,
            showProgressPulse = V.showProgressPulse,
            V = bh.qQ(),
            rO = !1,
            lX = jQuery(bh.kW),
            um = jQuery(bh.fj),
            progressPulseElm = jQuery(
              '<div class="progress_pulse"></div>'
            ).appendTo(bh.bp);
          um.html("");
          lX.addClass(V ? "progress_bar_anim_fs" : "progress_bar_anim"),
            bh.settings.progressCallback ||
              setTimeout(
                function () {
                  rO ||
                    bh.gC ||
                    (showProgressBar && lX.show(),
                    showProgressPulse && progressPulseElm.show(),
                    showProgressNum && um.show());
                },
                V ? 500 : 200
              ),
            (this.il = function (percent) {
              um.html(percent + "%");
            }),
            (this.destroy = function () {
              um.html(""),
                um.hide(),
                progressPulseElm.hide(),
                lX.hide(),
                (bh.bA.settings.bI.toolbarAutohide && !bh.canShowAutoToolbar) ||
                  bh.gk.show(),
                (rO = !0);
            }),
            (this.show = function (afterLoaded) {
              showProgressBar && lX.show(),
                showProgressPulse && progressPulseElm.show(),
                afterLoaded || (showProgressNum && um.show());
            }),
            (this.hide = function () {
              lX.hide(), progressPulseElm.hide();
            });
        }),
        (WR360.bZ = function () {}),
        (WR360.bZ.od = function (text) {
          this.eF("INFO", text);
        }),
        (WR360.bZ.pd = function (text) {
          this.eF("DBG", text);
        }),
        (WR360.bZ.gA = function (text) {
          this.eF("ERR", text);
        }),
        (WR360.bZ.oU = function (text) {
          this.eF("CRI", text);
        }),
        (WR360.bZ.nG = function (text) {
          this.eF("WRN", text);
        }),
        (WR360.bZ.eF = function (lA, text) {
          window.console && window.console.log(lA + " " + text);
        }),
        (WR360.ImageRotator.prototype.qn = function () {
          (this.ey = !1), (this.gT = !1), jQuery(this.cl).fadeOut(200);
        }),
        (WR360.ImageRotator.prototype.pm = function (e) {
          return !!this.ey && (this.gT || this.qn(), !0);
        }),
        (WR360.ImageRotator.prototype.mF = function () {
          var scrollX = 0,
            scrollY = 0;
          return (
            "number" == typeof window.pageYOffset
              ? ((scrollX = window.pageXOffset), (scrollY = window.pageYOffset))
              : document.body &&
                (document.body.scrollLeft || document.body.scrollTop)
              ? ((scrollX = document.body.scrollLeft),
                (scrollY = document.body.scrollTop))
              : document.documentElement &&
                (document.documentElement.scrollLeft ||
                  document.documentElement.scrollTop) &&
                ((scrollX = document.documentElement.scrollLeft),
                (scrollY = document.documentElement.scrollTop)),
            { scrollX: scrollX, scrollY: scrollY }
          );
        }),
        (WR360.ImageRotator.prototype.nP = function (e) {
          var e = WR360.by.fS(e),
            offset = this.bp.offset();
          return (
            jQuery(this.cl).css("left", e.x - offset.left),
            jQuery(this.cl).css("top", e.y - offset.top),
            jQuery(this.cl).fadeIn(200),
            !(this.ey = !0)
          );
        }),
        (WR360.Toolbar = function (bh) {
          (this.sD = 0),
            (this.tg = 0),
            (this.hM = 0),
            (this.iz = 0),
            (this.ik = 0),
            (this.iy = 0),
            (this.rk = 0),
            (this.jZ = 0),
            (this.bh = bh),
            (this.iB = !1);
        }),
        (WR360.Toolbar.prototype.cD = function () {
          0 == this.iB &&
            ((this.sD = jQuery(this.bh.sR).outerWidth(!0)),
            (this.tg = jQuery(this.bh.sj).outerWidth(!0)),
            (this.hM = jQuery(this.bh.gU).outerWidth(!0)),
            (this.iz = jQuery(this.bh.hd).outerWidth(!0)),
            (this.ik = jQuery(this.bh.jA).outerWidth(!0)),
            (this.iy = jQuery(this.bh.jD).outerWidth(!0)),
            (this.rk = jQuery(this.bh.pQ).outerWidth(!0)),
            (this.jZ = jQuery(this.bh.kp).outerWidth(!0)),
            (this.iB = !0));
        }),
        (WR360.Toolbar.prototype.Translate = function (V, bh) {
          1 == V.settings.bI.iU &&
            ("undefined" != typeof WR360_TRANSLATE_OVERRIDE &&
              (bh.settings.i18n = WR360_TRANSLATE_OVERRIDE),
            jQuery(this.bh.sR).attr("title", bh.settings.i18n.sV),
            jQuery(this.bh.sj).attr("title", bh.settings.i18n.uN),
            jQuery(this.bh.gU).attr(
              "title",
              bh.settings.i18n.arrowLeftButtonTooltip
            ),
            jQuery(this.bh.hd).attr(
              "title",
              bh.settings.i18n.arrowRightButtonTooltip
            ),
            jQuery(this.bh.jA).attr(
              "title",
              bh.settings.i18n.zoomButtonsTooltip
            ),
            jQuery(this.bh.jD).attr(
              "title",
              bh.settings.i18n.togglePlayButtonTooltip
            ),
            jQuery(this.bh.pQ).attr(
              "title",
              bh.settings.i18n.fullScreenButtonTooltip
            ),
            jQuery(this.bh.kp).attr(
              "title",
              bh.settings.i18n.hotspotButtonTooltip
            ));
        }),
        (WR360.Toolbar.prototype.Enable = function (bh) {
          jQuery(bh.ie).css("pointer-events", "auto");
        }),
        (WR360.Toolbar.prototype.mV = function (V, bh) {
          var qL = jQuery(bh.ie),
            qN = bh.gk,
            ur = bh.nb,
            qN =
              (1 == V.settings.bI.toolbarPosition &&
                (qN.css({ bottom: "auto", top: 0 }),
                ur.css({ bottom: "auto", top: 0 })),
              ur.css({
                "background-color": V.settings.bI.gH,
                opacity: V.settings.bI.gX,
              }),
              1 == V.settings.bI.toolbarAutohide &&
                0 == bh.canShowAutoToolbar &&
                ur.hide(),
              qL.css({
                float:
                  1 == V.settings.bI.gx
                    ? "right"
                    : -1 == V.settings.bI.gx
                    ? "left"
                    : "none",
                opacity: V.settings.bI.iC,
              }),
              0),
            ur =
              (1 == V.settings.bI.hb
                ? ((qN += this.hM + this.iz),
                  jQuery(bh.gU).show(),
                  jQuery(bh.hd).show(),
                  1 < V.aw.rows
                    ? ((qN += this.sD + this.tg),
                      jQuery(bh.sR).show(),
                      jQuery(bh.sj).show())
                    : (jQuery(bh.sR).hide(), jQuery(bh.sj).hide()))
                : (jQuery(bh.sR).hide(),
                  jQuery(bh.sj).hide(),
                  jQuery(bh.gU).hide(),
                  jQuery(bh.hd).hide()),
              1 == V.settings.bI.gw
                ? ((qN += this.ik), bh.dN.aH(!0))
                : bh.dN.aH(!1),
              1 == V.settings.bI.gj
                ? ((qN += this.iy), jQuery(bh.jD).show())
                : jQuery(bh.jD).hide(),
              WR360.by.mZ() && !bh.pz(bh.bp[0]));
          1 == V.settings.bI.iT && 0 == bh.av && 0 == ur
            ? ((qN += this.rk), bh.qZ.aH(!0))
            : bh.qZ.aH(!1),
            1 == V.settings.bI.bY && V.ly()
              ? ((qN += this.jZ), bh.bY.aH(!0))
              : bh.bY.aH(!1),
            qL.css("width", qN),
            this.Translate(V, bh);
        }),
        (WR360.Translations = function () {
          (this.zoomButtonsTooltip = "Zoom in / out"),
            (this.hotspotButtonTooltip = "Hot-spots on / off"),
            (this.fullScreenButtonTooltip = "Full Screen on / off"),
            (this.togglePlayButtonTooltip = "Play / Stop"),
            (this.arrowLeftButtonTooltip = "Rotate left"),
            (this.arrowRightButtonTooltip = "Rotate right"),
            (this.sV = "Move up"),
            (this.uN = "Move down");
        }),
        (WR360.jQ = function () {
          (this.graphicsPath = ""),
            (this.configFileURL = ""),
            (this.rootPath = ""),
            (this.responsiveBaseWidth = 0),
            (this.responsiveMinHeight = 0),
            (this.inBrowserFullScreen = !1),
            (this.fullScreenOnClick = !1),
            (this.apiReadyCallback = null),
            (this.progressCallback = null),
            (this.configReadyCallback = null),
            (this.reloadCallback = null),
            (this.googleEventTracking = !1),
            (this.pixriotEventTracking = !1),
            (this.eventTrackingAlias = ""),
            (this.eventTrackingCallback = null),
            (this.disableRelativeAssets = !1),
            (this.skin = ""),
            (this.alt = ""),
            (this.version = "v5.0 (build 5.0.1.55)"),
            (this.i18n = new WR360.Translations());
        }),
        (WR360.Events = function () {}),
        (WR360.Events.hG = "HIDE_ROLLOVER"),
        (WR360.lC = function () {
          this.ew = [];
        }),
        (WR360.lC.prototype = {
          constructor: WR360.lC,
          add: function (rotator) {
            if (!(rotator instanceof WR360.ImageRotator))
              throw new Error("Added object is not an ImageRotator object.");
            for (var i = 0, ia = this.ew.length; i < ia; i++)
              if (this.ew[i] === rotator)
                throw new Error("Added ImageRotator already exists.");
            this.ew.push(rotator);
          },
          remove: function (rotator) {
            for (var i = 0, ia = this.ew.length; i < ia; i++)
              if (this.ew[i] === rotator) {
                this.ew.splice(i, 1);
                break;
              }
          },
          get: function (index) {
            return index < 0 || index > this.ew.length - 1
              ? null
              : this.ew[index];
          },
        });
      var lH = new WR360.lC();
    })(),
    new WR360.ImageRotator());
function getBrowserId(t, k) {
  k = ac.fk.bL(k);
  return ac.G.aD(t, k);
}
(jQuery.fn.rotator = function (options) {
  var oR = jQuery.extend({}, jQuery.fn.rotator.defaults, options);
  return this.each(function () {
    !(function (qd, oR) {
      qd = qd.attributes.id.value;
      if (
        null == qd ||
        "string" != (typeof qd).toString().toLowerCase() ||
        0 == qd.length
      )
        throw new Error(
          "Can't get Player ID from the jQuery selected element."
        );
      qd = WR360.ImageRotator.Create(qd);
      null != qd &&
        ((qd.licenseCode = oR.licenseCode),
        (qd.licenseFileURL = oR.licenseFileURL),
        (qd.settings.graphicsPath = oR.graphicsPath),
        (qd.settings.configFileURL = oR.configFileURL),
        (qd.settings.rootPath = oR.rootPath),
        (qd.settings.responsiveBaseWidth = oR.responsiveBaseWidth),
        (qd.settings.responsiveMinHeight = oR.responsiveMinHeight),
        (qd.settings.i18n = oR.i18n),
        (qd.settings.fullScreenOnClick = oR.fullScreenOnClick),
        (qd.settings.inBrowserFullScreen = oR.inBrowserFullScreen),
        (qd.settings.apiReadyCallback = oR.apiReadyCallback),
        (qd.settings.progressCallback = oR.progressCallback),
        (qd.settings.configReadyCallback = oR.configReadyCallback),
        (qd.settings.reloadCallback = oR.reloadCallback),
        (qd.settings.googleEventTracking = oR.googleEventTracking),
        (qd.settings.pixriotEventTracking = oR.pixriotEventTracking),
        (qd.settings.eventTrackingAlias = oR.eventTrackingAlias),
        (qd.settings.eventTrackingCallback = oR.eventTrackingCallback),
        (qd.settings.disableRelativeAssets = oR.disableRelativeAssets),
        (qd.settings.alt = oR.alt),
        (qd.settings.skin = oR.skin),
        qd.qC && qd.qC(oR.configFileFullScreenURL),
        qd.runImageRotator());
    })(
      this,
      jQuery.metadata ? jQuery.extend({}, oR, jQuery.metadata.get(this)) : oR
    );
  });
}),
  (jQuery.fn.rotator.defaults = {
    licenseCode: "",
    licenseFileURL: "license.lic",
    graphicsPath: "",
    configFileURL: "",
    configFileFullScreenURL: "",
    rootPath: "",
    responsiveBaseWidth: 0,
    responsiveMinHeight: 0,
    fullScreenOnClick: !1,
    inBrowserFullScreen: !1,
    i18n: new WR360.Translations(),
    apiReadyCallback: null,
    progressCallback: null,
    configReadyCallback: null,
    reloadCallback: null,
    disableRelativeAssets: !1,
    googleEventTracking: !1,
    pixriotEventTracking: !1,
    eventTrackingAlias: "",
    eventTrackingCallback: null,
    alt: "",
    skin: "",
  }),
  (function () {
    var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
      d = (window.ac = {}),
      a = (d.fk = {
        iv: function (h, g) {
          return (h << g) | (h >>> (32 - g));
        },
        om: function (h, g) {
          return (h << (32 - g)) | (h >>> g);
        },
        endian: function (h) {
          if (h.constructor == Number)
            return (16711935 & a.iv(h, 8)) | (4278255360 & a.iv(h, 24));
          for (var g = 0; g < h.length; g++) h[g] = a.endian(h[g]);
          return h;
        },
        mw: function (h) {
          for (var g = []; 0 < h; h--) g.push(Math.floor(256 * Math.random()));
          return g;
        },
        ar: function (h) {
          for (var k = [], j = 0, g = 0; j < h.length; j++, g += 8)
            k[g >>> 5] |= h[j] << (24 - (g % 32));
          return k;
        },
        iP: function (i) {
          for (var h = [], g = 0; g < 32 * i.length; g += 8)
            h.push((i[g >>> 5] >>> (24 - (g % 32))) & 255);
          return h;
        },
        aZ: function (g) {
          for (var j = [], h = 0; h < g.length; h++)
            j.push((g[h] >>> 4).toString(16)), j.push((15 & g[h]).toString(16));
          return j.join("");
        },
        oI: function (h) {
          for (var g = [], i = 0; i < h.length; i += 2)
            g.push(parseInt(h.substr(i, 2), 16));
          return g;
        },
        aJ: function (h) {
          if ("function" == typeof btoa) return btoa(e.T(h));
          for (var g = [], l = 0; l < h.length; l += 3)
            for (
              var m = (h[l] << 16) | (h[l + 1] << 8) | h[l + 2], k = 0;
              k < 4;
              k++
            )
              8 * l + 6 * k <= 8 * h.length
                ? g.push(c.charAt((m >>> (6 * (3 - k))) & 63))
                : g.push("=");
          return g.join("");
        },
        bL: function (h) {
          if ("function" == typeof atob) return e.de(atob(h));
          h = h.replace(/[^A-Z0-9+\/]/gi, "");
          for (var g = [], j = 0, k = 0; j < h.length; k = ++j % 4)
            0 != k &&
              g.push(
                ((c.indexOf(h.charAt(j - 1)) & (Math.pow(2, -2 * k + 8) - 1)) <<
                  (2 * k)) |
                  (c.indexOf(h.charAt(j)) >>> (6 - 2 * k))
              );
          return g;
        },
      }),
      d = ((d.mode = {}), (d.charenc = {})),
      e =
        ((d.UTF8 = {
          de: function (g) {
            return e.de(unescape(encodeURIComponent(g)));
          },
          T: function (g) {
            return decodeURIComponent(escape(e.T(g)));
          },
        }),
        (d.Binary = {
          de: function (j) {
            for (var g = [], h = 0; h < j.length; h++) g.push(j.charCodeAt(h));
            return g;
          },
          T: function (g) {
            for (var j = [], h = 0; h < g.length; h++)
              j.push(String.fromCharCode(g[h]));
            return j.join("");
          },
        }));
  })(),
  (function () {
    var f = ac,
      a = f.fk,
      b = f.charenc,
      e = b.UTF8,
      d = b.Binary,
      c = (f.SHA1 = function (i, g) {
        i = a.iP(c.mn(i));
        return g && g.asBytes ? i : g && g.asString ? d.T(i) : a.aZ(i);
      });
    (c.mn = function (o) {
      o.constructor == String && (o = e.de(o));
      var v = a.ar(o),
        o = 8 * o.length,
        p = [],
        r = 1732584193,
        q = -271733879,
        k = -1732584194,
        h = 271733878,
        g = -1009589776;
      (v[o >> 5] |= 128 << (24 - (o % 32))),
        (v[15 + (((64 + o) >>> 9) << 4)] = o);
      for (var z = 0; z < v.length; z += 16) {
        for (var E = r, D = q, C = k, B = h, A = g, y = 0; y < 80; y++) {
          p[y] =
            y < 16
              ? v[z + y]
              : ((u = p[y - 3] ^ p[y - 8] ^ p[y - 14] ^ p[y - 16]) << 1) |
                (u >>> 31);
          var u =
              ((r << 5) | (r >>> 27)) +
              g +
              (p[y] >>> 0) +
              (y < 20
                ? 1518500249 + ((q & k) | (~q & h))
                : y < 40
                ? 1859775393 + (q ^ k ^ h)
                : y < 60
                ? ((q & k) | (q & h) | (k & h)) - 1894007588
                : (q ^ k ^ h) - 899497514),
            g = h,
            h = k,
            k = (q << 30) | (q >>> 2),
            q = r,
            r = u;
        }
        (r += E), (q += D), (k += C), (h += B), (g += A);
      }
      return [r, q, k, h, g];
    }),
      (c.dB = 16);
  })(),
  (function () {
    var e = ac,
      a = e.fk,
      b = e.charenc,
      d = b.UTF8,
      c = b.Binary;
    e.HMAC = function (l, m, k, h) {
      m.constructor == String && (m = d.de(m));
      for (
        var g = (k =
            (k = k.constructor == String ? d.de(k) : k).length > 4 * l.dB
              ? l(k, { asBytes: !0 })
              : k).slice(0),
          n = k.slice(0),
          j = 0;
        j < 4 * l.dB;
        j++
      )
        (g[j] ^= 92), (n[j] ^= 54);
      k = l(g.concat(l(n.concat(m), { asBytes: !0 })), { asBytes: !0 });
      return h && h.asBytes ? k : h && h.asString ? c.T(k) : a.aZ(k);
    };
  })(),
  (function () {
    var e = ac,
      a = e.fk,
      b = e.charenc,
      d = b.UTF8,
      c = b.Binary;
    e.PBKDF2 = function (q, o, f, t) {
      q.constructor == String && (q = d.de(q)),
        o.constructor == String && (o = d.de(o));
      var s = (t && t.hasher) || e.SHA1,
        k = (t && t.iterations) || 1;
      function p(i, j) {
        return e.HMAC(s, j, i, { asBytes: !0 });
      }
      for (var h = [], g = 1; h.length < f; ) {
        for (var l = p(q, o.concat(a.iP([g]))), r = l, n = 1; n < k; n++)
          for (var r = p(q, r), m = 0; m < l.length; m++) l[m] ^= r[m];
        (h = h.concat(l)), g++;
      }
      return (
        (h.length = f), t && t.asBytes ? h : t && t.asString ? c.T(h) : a.aZ(h)
      );
    };
  })(),
  (function () {
    function a(c, b, d) {
      for (var g = 4 * c.dB, f = d.slice(0), e = 0; e < b.length; e++)
        e % g == 0 && c.mX(f, 0), (b[e] ^= f[e % g]);
    }
    ac.mode.OFB = { jc: a, aD: a };
  })(),
  (function () {
    for (
      var l = ac,
        a = l.fk,
        u = l.charenc,
        s = u.UTF8,
        v =
          (u.Binary,
          [
            99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215,
            171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175,
            156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165,
            229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18,
            128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82,
            59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91,
            106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51,
            133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157,
            56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95,
            151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220,
            34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58,
            10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200,
            55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8,
            186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189,
            139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134,
            193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135,
            233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65,
            153, 45, 15, 176, 84, 187, 22,
          ]),
        n = [],
        r = 0;
      r < 256;
      r++
    )
      n[v[r]] = r;
    var q = [],
      p = [],
      m = [],
      h = [],
      g = [],
      e = [];
    function f(y, x) {
      for (var w = 0, z = 0; z < 8; z++) {
        1 & x && (w ^= y);
        var A = 128 & y;
        (y = (y << 1) & 255), A && (y ^= 27), (x >>>= 1);
      }
      return w;
    }
    for (r = 0; r < 256; r++)
      (q[r] = f(r, 2)),
        (p[r] = f(r, 3)),
        (m[r] = f(r, 9)),
        (h[r] = f(r, 11)),
        (g[r] = f(r, 13)),
        (e[r] = f(r, 14));
    var d,
      b,
      t,
      k = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
      c = [[], [], [], []],
      o = (l.G = {
        jc: function (A, z, y) {
          var A = s.de(A),
            x = a.mw(4 * o.dB),
            z =
              z.constructor == String ? l.PBKDF2(z, x, 32, { asBytes: !0 }) : z,
            y = (y && y.mode) || l.mode.OFB;
          return o.jC(z), y.jc(o, A, x), a.aJ(x.concat(A));
        },
        aD: function (z, y, x) {
          var z = a.bL(z),
            w = z.splice(0, 4 * o.dB),
            y =
              y.constructor == String ? l.PBKDF2(y, w, 32, { asBytes: !0 }) : y,
            x = (x && x.mode) || l.mode.OFB;
          return o.jC(y), x.aD(o, z, w), s.T(z);
        },
        dB: 4,
        mX: function (w, x) {
          for (var D = 0; D < o.dB; D++)
            for (var i = 0; i < 4; i++) c[D][i] = w[x + 4 * i + D];
          for (D = 0; D < 4; D++) for (i = 0; i < 4; i++) c[D][i] ^= t[i][D];
          for (var C = 1; C < b; C++) {
            for (D = 0; D < 4; D++)
              for (i = 0; i < 4; i++) c[D][i] = v[c[D][i]];
            c[1].push(c[1].shift()),
              c[2].push(c[2].shift()),
              c[2].push(c[2].shift()),
              c[3].unshift(c[3].pop());
            for (i = 0; i < 4; i++) {
              var B = c[0][i],
                A = c[1][i],
                z = c[2][i],
                y = c[3][i];
              (c[0][i] = q[B] ^ p[A] ^ z ^ y),
                (c[1][i] = B ^ q[A] ^ p[z] ^ y),
                (c[2][i] = B ^ A ^ q[z] ^ p[y]),
                (c[3][i] = p[B] ^ A ^ z ^ q[y]);
            }
            for (D = 0; D < 4; D++)
              for (i = 0; i < 4; i++) c[D][i] ^= t[4 * C + i][D];
          }
          for (D = 0; D < 4; D++) for (i = 0; i < 4; i++) c[D][i] = v[c[D][i]];
          c[1].push(c[1].shift()),
            c[2].push(c[2].shift()),
            c[2].push(c[2].shift()),
            c[3].unshift(c[3].pop());
          for (D = 0; D < 4; D++)
            for (i = 0; i < 4; i++) c[D][i] ^= t[4 * b + i][D];
          for (D = 0; D < o.dB; D++)
            for (i = 0; i < 4; i++) w[x + 4 * i + D] = c[D][i];
        },
        oE: function (x, w) {
          for (var D = 0; D < o.dB; D++)
            for (var i = 0; i < 4; i++) c[D][i] = x[w + 4 * i + D];
          for (D = 0; D < 4; D++)
            for (i = 0; i < 4; i++) c[D][i] ^= t[4 * b + i][D];
          for (var C = 1; C < b; C++) {
            c[1].unshift(c[1].pop()),
              c[2].push(c[2].shift()),
              c[2].push(c[2].shift()),
              c[3].push(c[3].shift());
            for (D = 0; D < 4; D++)
              for (i = 0; i < 4; i++) c[D][i] = n[c[D][i]];
            for (D = 0; D < 4; D++)
              for (i = 0; i < 4; i++) c[D][i] ^= t[4 * (b - C) + i][D];
            for (i = 0; i < 4; i++) {
              var B = c[0][i],
                A = c[1][i],
                z = c[2][i],
                y = c[3][i];
              (c[0][i] = e[B] ^ h[A] ^ g[z] ^ m[y]),
                (c[1][i] = m[B] ^ e[A] ^ h[z] ^ g[y]),
                (c[2][i] = g[B] ^ m[A] ^ e[z] ^ h[y]),
                (c[3][i] = h[B] ^ g[A] ^ m[z] ^ e[y]);
            }
          }
          c[1].unshift(c[1].pop()),
            c[2].push(c[2].shift()),
            c[2].push(c[2].shift()),
            c[3].push(c[3].shift());
          for (D = 0; D < 4; D++) for (i = 0; i < 4; i++) c[D][i] = n[c[D][i]];
          for (D = 0; D < 4; D++) for (i = 0; i < 4; i++) c[D][i] ^= t[i][D];
          for (D = 0; D < o.dB; D++)
            for (i = 0; i < 4; i++) x[w + 4 * i + D] = c[D][i];
        },
        jC: function (i) {
          (d = i.length / 4), (b = d + 6), o.ni(i);
        },
        ni: function (w) {
          t = [];
          for (var x = 0; x < d; x++)
            t[x] = [w[4 * x], w[4 * x + 1], w[4 * x + 2], w[4 * x + 3]];
          for (x = d; x < o.dB * (b + 1); x++) {
            var i = [t[x - 1][0], t[x - 1][1], t[x - 1][2], t[x - 1][3]];
            x % d == 0
              ? (i.push(i.shift()),
                (i[0] = v[i[0]]),
                (i[1] = v[i[1]]),
                (i[2] = v[i[2]]),
                (i[3] = v[i[3]]),
                (i[0] ^= k[x / d]))
              : 6 < d &&
                x % d == 4 &&
                ((i[0] = v[i[0]]),
                (i[1] = v[i[1]]),
                (i[2] = v[i[2]]),
                (i[3] = v[i[3]])),
              (t[x] = [
                t[x - d][0] ^ i[0],
                t[x - d][1] ^ i[1],
                t[x - d][2] ^ i[2],
                t[x - d][3] ^ i[3],
              ]);
          }
        },
      });
  })(),
  (WR360.ImageRotator.prototype.tZ = function (sp, et, speed, hZ) {
    var uZ;
    this.vd() ||
      ((sp =
        (sp =
          sp <= this.bA.settings.control.zoomSteps
            ? sp
            : this.bA.settings.control.zoomSteps) < 0
          ? 0
          : sp) == this.dC
        ? hZ && hZ()
        : ((uZ = sp > this.dC),
          (this.dC = sp),
          uZ ? this.kX(!0, et, speed, hZ) : this.kI(!0, et, speed, hZ)));
  }),
  (WR360.ImageRotator.prototype.jL = function (gh, e, target) {
    var gI, et;
    this.R ||
      ((et = null),
      gh &&
        !this.bA.settings.control.centerZoom &&
        ((gh = this.bA.settings.rotation.flipAxis ? this.ei : this.dO),
        (gI = this.bA.settings.rotation.flipAxis ? this.dO : this.ei),
        (gh = Math.abs(gh)),
        (gI = Math.abs(gI)),
        (et = { x: gh - (gh = this.bp.offset()).left, y: gI - gh.top })),
      !this.dn || this.dC < this.bA.settings.control.zoomSteps
        ? (this.dC++, this.kX(!0, et))
        : ((this.dC = 0), this.kI(!0, et)));
  }),
  (WR360.ImageRotator.prototype.kX = function (aX, et, speed, hZ) {
    var hJ = !!this.bU.lU(this.bV.kl)[this.bV.aF].image.cS,
      uJ =
        (this.bA.settings.control.hideHotspotsOnZoom && this.lz(), this.sN(et)),
      et = {
        marginLeft: uJ.qs,
        marginTop: uJ.nS,
        width: uJ.cK,
        height: uJ.fz,
        left: 0,
        top: 0,
      };
    this.bV.aG.animate(
      et,
      speed || this.bA.settings.control.zoomSpeed,
      jQuery.proxy(function () {
        (this.dn = !0),
          this.bA.settings.control.zoomSteps <= this.dC &&
            (this.bp.addClass("container_zoomed"), this.dN.as(!0)),
          hJ && this.fK(),
          this.bV.fP(),
          (this.R = !1),
          hZ && hZ(),
          this.dispatchEvent(
            new WR360.Event(WR360.ImageRotator.Events.qt, !1, !1, uJ.qH)
          );
      }, this)
    ),
      this.dispatchEvent(new WR360.Event(WR360.ImageRotator.Events.un, !1, !1)),
      this.bV.kM(
        speed || this.bA.settings.control.zoomSpeed,
        0,
        0,
        uJ.qs,
        uJ.nS,
        uJ.cK,
        uJ.fz
      ),
      (this.R = !0),
      (this.qY = !1),
      this.gD() && 1 == this.dC && this.sm.Event(WR360.sY.rU.ZOOM);
  }),
  (WR360.ImageRotator.prototype.kI = function (aX, et, speed, hZ) {
    var uJ;
    this.dn &&
      ((aX && 0 != this.dC) ||
        ((this.dC = 0),
        this.bV.aS(null),
        (this.bV.en = !1),
        (this.bV.flippingToLowresOnZoomOut = !0),
        this.bV.dE(this.bV.aF),
        (this.bV.flippingToLowresOnZoomOut = !1)),
      (uJ = {
        qs: this.aU["_viewPort.x"],
        nS: this.aU["_viewPort.y"],
        cK: this.aU["_viewPort.width"],
        fz: this.aU["_viewPort.height"],
        qH: 0,
      }),
      aX
        ? ((aX = {
            marginLeft: (uJ = 0 != this.dC ? this.sN(et) : uJ).qs,
            marginTop: uJ.nS,
            width: uJ.cK,
            height: uJ.fz,
            left: 0,
            top: 0,
          }),
          this.bV.aG.animate(
            aX,
            speed || this.bA.settings.control.zoomSpeed,
            jQuery.proxy(function () {
              this.rv(uJ.qH), hZ && hZ();
            }, this)
          ),
          this.dispatchEvent(
            new WR360.Event(WR360.ImageRotator.Events.un, !1, !1)
          ),
          this.bV.kM(
            speed || this.bA.settings.control.zoomSpeed,
            0,
            0,
            uJ.qs,
            uJ.nS,
            uJ.cK,
            uJ.fz
          ),
          (this.R = !0))
        : (this.bV.aG.css({
            "margin-left": uJ.qs,
            "margin-top": uJ.nS,
            width: uJ.cK,
            height: uJ.fz,
            left: 0,
            top: 0,
          }),
          this.rv(0),
          this.bV.fP()));
  }),
  (WR360.ImageRotator.prototype.sN = function (et) {
    var fB = this.aU["_viewPort.width"],
      cw = this.aU["_viewPort.height"],
      sJ = this.bV.aG.css("margin-left").gO(),
      rG = this.bV.aG.css("margin-top").gO(),
      rj = this.bV.aG.css("width").gO(),
      rS = this.bV.aG.css("height").gO(),
      sf = (this.fm - rj) / 2,
      tp = (this.fJ - rS) / 2,
      qJ = this.mJ(),
      sg = (qJ - 1) / this.bA.settings.control.zoomSteps,
      cK = sg * this.dC * fB + fB,
      sg = sg * this.dC * cw + cw,
      cw = cK / rj,
      rj = sg / rS,
      rS = 0,
      sv = 0,
      et =
        (et &&
          ((rS = (sB = et.x - this.fm / 2) * cw - sB),
          (sv = (sB = et.y - this.fJ / 2) * rj - sB)),
        (this.fm - cK) / 2 - (sf - sJ) * cw - rS),
      sB = (this.fJ - sg) / 2 - (tp - rG) * rj - sv,
      sf =
        ((this.eL.fd = this.fm - cK < 0 ? 0 : this.fm - cK),
        (this.eL.fM = this.fJ - sg < 0 ? 0 : this.fJ - sg),
        (this.eL.eY = this.fm - cK < 0 ? this.fm - cK : 0),
        (this.eL.ev = this.fJ - sg < 0 ? this.fJ - sg : 0),
        this.qO(et, sB));
    return {
      qs: sf.marginLeft,
      nS: sf.marginTop,
      cK: cK,
      fz: sg,
      qH: cK / (fB * qJ),
    };
  }),
  (WR360.ImageRotator.prototype.rv = function (qH) {
    this.dN.as(!1),
      0 == this.dC && ((this.dn = !1), (this.qY = !0), this.iV()),
      (this.R = !1),
      this.dispatchEvent(
        new WR360.Event(WR360.ImageRotator.Events.qt, !1, !1, qH)
      ),
      this.bp.removeClass("container_zoomed");
  }),
  (WR360.ImageRotator.prototype.getAPI = function () {
    return new WR360.API(this);
  }),
  (WR360.API = function (L) {
    (this.toolbar = new WR360.API.Tools(L)),
      (this.images = new WR360.API.Images(L)),
      (this.configuration = new WR360.API.Config(L)),
      (this.hotspots = new WR360.API.Hotspots(L)),
      (this.L = L);
  }),
  (WR360.API.prototype.reload = function (
    configFileURL,
    rootPath,
    hZ,
    reloadImageIndex,
    reloadRowIndex
  ) {
    this.L.reload(
      configFileURL,
      rootPath,
      hZ,
      reloadImageIndex,
      reloadRowIndex
    );
  }),
  (WR360.API.prototype.delete = function () {
    this.L &&
      (this.L.delete(),
      (this.L = null),
      (this.toolbar = null),
      (this.images = null),
      (this.configuration = null),
      (this.hotspots = null));
  }),
  (WR360.API.prototype.updateDimensions = function () {
    this.L.pS();
  }),
  (WR360.API.Hotspots = function (L) {
    this.L = L;
  }),
  (WR360.API.Hotspots.prototype.getDynamicHotspots = function () {
    return this.L.bV.bo();
  }),
  (WR360.API.Hotspots.prototype.hide = function (dj, isHide) {
    this.L.bV.qb(dj, isHide);
  }),
  (WR360.API.Hotspots.prototype.activate = function (dj, timeout, hZ) {
    this.L.bV.uO(dj, timeout, hZ);
  }),
  (WR360.API.Hotspots.prototype.deactivate = function (dj) {
    this.L.bV.op(dj);
  }),
  (WR360.API.Hotspots.prototype.trigger = function (dj) {
    this.L.bV.vf(dj);
  }),
  (WR360.API.Hotspots.prototype.onAction = function (hZ) {
    if ("function" == typeof hZ) {
      var fZ,
        cA = this.L.bV.cA;
      for (fZ in cA) {
        var aN = cA[fZ];
        aN instanceof WR360.aT &&
          aN.aO.addEventListener(WR360.fC.Events.ud, function () {
            var param = this.bi;
            return hZ(param);
          });
      }
    }
  }),
  (WR360.API.Hotspots.prototype.onActivate = function (hZ) {
    if ("function" == typeof hZ) {
      var fZ,
        cA = this.L.bV.cA;
      for (fZ in cA) {
        var aN = cA[fZ];
        aN instanceof WR360.aT &&
          aN.addEventListener(WR360.aT.Events.tn, function () {
            var param = this.mv();
            return hZ(param);
          });
      }
    }
  }),
  (WR360.API.Hotspots.prototype.onDeactivate = function (hZ) {
    if ("function" == typeof hZ) {
      var fZ,
        cA = this.L.bV.cA;
      for (fZ in cA) {
        var aN = cA[fZ];
        aN instanceof WR360.aT &&
          aN.addEventListener(WR360.aT.Events.uo, function () {
            var param = this.mv();
            return hZ(param);
          });
      }
    }
  }),
  (WR360.API.Tools = function (L) {
    this.L = L;
  }),
  (WR360.API.Tools.prototype.zoomToggle = function () {
    this.L.mt();
  }),
  (WR360.API.Tools.prototype.hotspotToggle = function () {
    this.L.mf();
  }),
  (WR360.API.Tools.prototype.openFullScreen = function () {
    this.L.rc(null);
  }),
  (WR360.API.Tools.prototype.rotateOnce = function (period, hZ) {
    void 0 !== hZ && (this.L.gb = hZ), this.L.fO(), this.L.gJ(period);
  }),
  (WR360.API.Tools.prototype.playbackToggle = function (period) {
    1 == this.L.pY
      ? this.L.cJ()
      : (this.L.co(),
        this.L.gJ(period),
        1 == this.L.gD() && this.L.sm.Event(WR360.sY.rU.rQ));
  }),
  (WR360.API.Tools.prototype.playbackStop = function () {
    this.L.cJ();
  }),
  (WR360.API.Tools.prototype.playbackStart = function (period) {
    this.L.co(), this.L.cJ(), this.L.gJ(period);
  }),
  (WR360.API.Tools.prototype.moveRowUp = function (ef) {
    this.L.bV.uK(),
      (void 0 !== ef && !0 !== ef) ||
        (1 == this.L.gD() && this.L.sm.Event(WR360.sY.rU.sP));
  }),
  (WR360.API.Tools.prototype.moveRowDown = function (ef) {
    this.L.bV.ta(),
      (void 0 !== ef && !0 !== ef) ||
        (1 == this.L.gD() && this.L.sm.Event(WR360.sY.rU.sP));
  }),
  (WR360.API.Tools.prototype.startLeftArrowRotate = function () {
    this.L.co(), this.L.cJ(), this.L.np();
  }),
  (WR360.API.Tools.prototype.startRightArrowRotate = function () {
    this.L.co(), this.L.cJ(), this.L.nv();
  }),
  (WR360.API.Tools.prototype.stopArrowRotate = function () {
    this.L.co();
  }),
  (WR360.API.Images = function (L) {
    this.L = L;
  }),
  (WR360.API.Images.prototype.zoom = function (sp, et, speed, hZ) {
    this.L.tZ(sp, et, speed, hZ);
  }),
  (WR360.API.Images.prototype.getRowCount = function () {
    return this.L.bV.bU.sd();
  }),
  (WR360.API.Images.prototype.getTotalImageCount = function () {
    return this.L.bV.bU.rr();
  }),
  (WR360.API.Images.prototype.getCurrentRowIndex = function () {
    return this.L.bV.kl;
  }),
  (WR360.API.Images.prototype.getCurrentImageIndex = function () {
    return this.L.bV.ob();
  }),
  (WR360.API.Images.prototype.showImageByIndex = function (index, rowIndex) {
    this.L.co(),
      this.L.cJ(),
      this.L.bV.rE(),
      void 0 !== rowIndex &&
        rowIndex < this.L.bV.bU.sd() &&
        0 <= rowIndex &&
        (this.L.bV.kl = rowIndex),
      this.L.bV.dE(index);
  }),
  (WR360.API.Images.prototype.showImageByDelta = function (jG, rowIndex) {
    this.L.co(),
      this.L.cJ(),
      this.L.bV.rE(),
      void 0 !== rowIndex &&
        rowIndex < this.L.bV.bU.sd() &&
        0 <= rowIndex &&
        (this.L.bV.kl = rowIndex),
      this.L.bV.iG(jG);
  }),
  (WR360.API.Images.prototype.playToLabel = function (label, step, hZ) {
    this.L.co(), this.L.cJ(), this.L.bV.qB(label, new WR360.uH(step), hZ);
  }),
  (WR360.API.Images.prototype.jumpToLabel = function (label) {
    this.L.co(), this.L.cJ(), this.L.bV.qo(label);
  }),
  (WR360.API.Images.prototype.onZoom = function (hZ) {
    var self = this;
    this.L.addEventListener(WR360.ImageRotator.Events.qt, function (event) {
      return hZ(event.param, self.L.dC);
    });
  }),
  (WR360.API.Images.prototype.onFrame = function (hZ) {
    this.L.addEventListener(WR360.ImageRotator.Events.pP, function (event) {
      return hZ(event.param);
    });
  }),
  (WR360.API.Images.prototype.onDrag = function (hZ) {
    this.L.addEventListener(WR360.ImageRotator.Events.ve, function (event) {
      return hZ(event.param);
    });
  }),
  (WR360.API.Images.prototype.disableDragControl = function () {
    this.L.uI = !0;
  }),
  (WR360.API.Images.prototype.enableDragControl = function () {
    this.L.uI = !1;
  }),
  (WR360.API.Config = function (L) {
    this.L = L;
  }),
  (WR360.ImageRotator.prototype.qQ = function () {
    return this.av;
  }),
  (WR360.ImageRotator.prototype.qr = function () {
    void 0 === this.av && (this.av = !1),
      void 0 === this.qR && (this.qR = null),
      void 0 === this.pH && (this.pH = null),
      void 0 === this.qA && (this.qA = ""),
      void 0 === this.configFileFullScreenURL &&
        (this.configFileFullScreenURL = ""),
      void 0 === this.pF && (this.pF = null),
      void 0 === this.qj && (this.qj = !1);
  }),
  (WR360.ImageRotator.prototype.pW = function () {
    return !(
      !(this.av && this.loaded && this.vh.is(":visible")) ||
      this.qj ||
      (this.qy(), 0)
    );
  }),
  (WR360.ImageRotator.prototype.jo = function (pk) {
    jQuery("html, body").css("overflow", pk ? "hidden" : "");
  }),
  (WR360.ImageRotator.prototype.qy = function () {
    this.jo(!0);
    var hf = this.mF();
    this.vh.css({
      top: hf.scrollY,
      left: hf.scrollX,
      width: jQuery(window).width(),
      height: window.innerHeight || jQuery(window).height(),
    }),
      jQuery(this.pf).css({
        width: jQuery(window).width(),
        height: window.innerHeight || jQuery(window).height(),
      }),
      this.gs();
  }),
  (WR360.ImageRotator.prototype.qC = function (configFileFullScreenURL) {
    this.qS() || (this.configFileFullScreenURL = configFileFullScreenURL);
  }),
  (WR360.ImageRotator.prototype.rg = function () {
    if (!this.qS()) {
      if (
        (this.rh(),
        1 == this.gD() && this.sm.Event(WR360.sY.rU.FULLSCREEN),
        null == this.qR)
      ) {
        var pG = this.cR + "_fs",
          pw = this.oY + "_fs";
        if (0 == jQuery(pG).length) {
          pG = jQuery("body");
          if (null == pG)
            throw new Error(
              "Can't create full-screen image rotator: parent element is NULL."
            );
          var hf,
            pG = jQuery(
              "<div id='" + pw + "' class='wr360_player wr360_player_fs'></div>"
            ).appendTo(pG),
            rf = this.vh.attr("class"),
            rf = (pG.addClass(rf), pG[0]),
            qj = this.pz(rf);
          qj
            ? (rf.requestFullScreen
                ? rf.requestFullScreen()
                : rf.mozRequestFullScreen
                ? rf.mozRequestFullScreen()
                : rf.webkitRequestFullScreen
                ? rf.webkitRequestFullScreen()
                : rf.msRequestFullscreen && rf.msRequestFullscreen(),
              pG.css({
                width: screen.width,
                height: screen.height,
                "background-color": this.bA.settings.bI.fullScreenBackColor,
              }))
            : (this.jo(!0),
              (hf = this.mF()),
              pG.css({
                position: "absolute",
                top: hf.scrollY,
                left: hf.scrollX,
                width: jQuery(window).width(),
                height: window.innerHeight || jQuery(window).height(),
                "z-index": 5e4,
                "background-color": this.bA.settings.bI.fullScreenBackColor,
              }));
        }
        (this.qR = new WR360.ImageRotator(pw)),
          (this.qR.settings.viewName = this.settings.viewName),
          (this.qR.settings.googleEventTracking =
            this.settings.googleEventTracking),
          (this.qR.settings.graphicsPath = this.settings.graphicsPath),
          (this.qR.settings.configFileURL =
            0 < this.configFileFullScreenURL.length
              ? this.configFileFullScreenURL
              : this.settings.configFileURL),
          (this.qR.licenseFileURL = this.licenseFileURL),
          (this.qR.licenseCode = this.licenseCode),
          (this.qR.settings.fullScreenOnClick =
            this.settings.fullScreenOnClick),
          (this.qR.settings.rootPath = this.settings.rootPath),
          (this.qR.settings.inBrowserFullScreen =
            this.settings.inBrowserFullScreen),
          (this.qR.settings.crossDomainConfigLoader =
            this.settings.crossDomainConfigLoader),
          (this.qR.settings.apiReadyCallback = this.settings.apiReadyCallback),
          (this.qR.settings.configReadyCallback =
            this.settings.configReadyCallback),
          (this.qR.av = !0),
          (this.qR.settings.progressCallback = this.settings.progressCallback),
          (this.qR.settings.reloadCallback = this.settings.reloadCallback),
          (this.qR.settings.eventTrackingCallback =
            this.settings.eventTrackingCallback),
          (this.qR.settings.eventTrackingAlias =
            this.settings.eventTrackingAlias),
          (this.qR.settings.skin = this.settings.skin),
          (this.qR.uI = this.uI),
          ((this.qR.pH = this).qR.pF = rf),
          (this.qR.qj = qj) && this.qR.pN(),
          this.qR.runImageRotator();
      } else this.qR.qi();
      (this.tS = !0), (this.qR.tS = !0);
    }
  }),
  (WR360.ImageRotator.prototype.pN = function (e) {
    jQuery(document).on(
      "mozfullscreenchange webkitfullscreenchange MSFullscreenChange",
      this.qF
    );
  }),
  (WR360.ImageRotator.prototype.qE = function (e) {
    document.mozFullScreen ||
      document.webkitIsFullScreen ||
      document.msFullscreenElement ||
      (this.vh.is(":visible") && this.pR(e));
  }),
  (WR360.ImageRotator.prototype.pz = function (cu) {
    return (
      1 != this.bA.settings.control.inBrowserFullScreen &&
      1 != this.settings.inBrowserFullScreen &&
      null != cu &&
      (cu.requestFullScreen ||
        cu.mozRequestFullScreen ||
        cu.msRequestFullscreen ||
        cu.webkitRequestFullScreen)
    );
  }),
  (WR360.ImageRotator.prototype.qi = function () {
    this.qS() ||
      (this.av &&
        (this.qj
          ? (this.pF.requestFullScreen
              ? this.pF.requestFullScreen()
              : this.pF.mozRequestFullScreen
              ? this.pF.mozRequestFullScreen()
              : this.pF.webkitRequestFullScreen
              ? this.pF.webkitRequestFullScreen()
              : this.pF.msRequestFullscreen && this.pF.msRequestFullscreen(),
            this.vh.css({ width: screen.width, height: screen.height }))
          : this.qy(),
        null != this.pH &&
          ((this.bV.kl = this.pH.bV.kl), this.bV.dE(this.pH.bV.ob())),
        this.bV.aG.fadeIn(600),
        this.vh.show()));
  }),
  (WR360.ImageRotator.prototype.uu = function () {
    null != this.qR &&
      (jQuery(document).off(
        "mozfullscreenchange webkitfullscreenchange MSFullscreenChange",
        this.qR.qF
      ),
      jQuery(document).off("click", this.qR.nV),
      this.qR.delete(),
      jQuery(this.qR.cR).remove(),
      (this.qR = null));
  }),
  (WR360.ImageRotator.prototype.pZ = function () {
    this.av &&
      ((this.tS = !1),
      (this.pH.tS = !1),
      this.cJ(),
      this.rh(),
      this.bV.aG.hide(),
      this.dispatchEvent(new WR360.Event(WR360.Events.hG, !1, !1)),
      this.bV.lx(),
      ((this.pH.fN && this.pH.fN != this.fN) ||
        (this.pH.gf && this.pH.gf != this.gf)) &&
        this.pH.reload(
          this.fN,
          this.gf,
          this.reloadCallback,
          this.reloadImageIndex,
          this.reloadRowIndex
        ),
      this.vh.hide());
  }),
  (WR360.ImageRotator.prototype.qU = function () {
    this.av &&
      1 == this.pH.bA.settings.bI.iT &&
      ((this.qA = this.cR + "_X"), 0 == jQuery(this.qA).length) &&
      (this.vh.append(
        "<a class='fullscreenoff_button' id='" +
          this.qA.replace("#", "") +
          "'></a>"
      ),
      jQuery(this.qA).click(
        jQuery.proxy(function (event) {
          this.ro(event);
        }, this)
      ),
      jQuery(document).on("click", this.nV));
  }),
  (WR360.ImageRotator.prototype.qz = function () {
    var success = !1;
    return (
      this.av &&
        null != this.pH &&
        ((this.bV.kl = this.pH.bV.kl),
        this.bV.dE(this.pH.bV.ob()),
        (success = !0)),
      success
    );
  }),
  (WR360.ImageRotator.prototype.qa = function () {
    !this.av ||
      this.settings.fullScreenOnClick ||
      1 == this.bA.settings.bI.showFullScreenToolbar ||
      (this.gk.hide(), this.nb.hide());
  }),
  (WR360.ImageRotator.prototype.rc = function (e) {
    this.R || (this.av ? (this.kI(!1), this.rn(e)) : (this.rg(), this.kI(!1)));
  }),
  (WR360.ImageRotator.prototype.pR = function (e) {
    this.kI(!1), this.pZ(), this.qj || this.jo(!1);
  }),
  (WR360.ImageRotator.prototype.ro = function (e) {
    e.preventDefault(), this.rn(e);
  }),
  (WR360.ImageRotator.prototype.rn = function (e) {
    this.av &&
      (this.qj &&
      (document.mozFullScreen ||
        document.webkitIsFullScreen ||
        document.msFullscreenElement)
        ? document.cancelFullScreen
          ? document.cancelFullScreen()
          : document.mozCancelFullScreen
          ? document.mozCancelFullScreen()
          : document.webkitCancelFullScreen
          ? document.webkitCancelFullScreen()
          : document.msExitFullscreen && document.msExitFullscreen()
        : this.pR(e));
  }),
  (WR360.ImageRotator.prototype.uj = function (e) {
    this.av &&
      this.vh.is(":visible") &&
      27 == e.which &&
      (e.preventDefault(), this.pR(e));
  });
