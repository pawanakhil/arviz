(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };var element = document.getElementById("e9554c0e-26bf-411d-b751-c921d458098e");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'e9554c0e-26bf-411d-b751-c921d458098e' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.4.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.4.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.4.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.4.0.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"8829f719-12e4-4067-a445-e9f09b379e13":{"roots":{"references":[{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"58895","type":"Patch"},{"attributes":{"data_source":{"id":"58883","type":"ColumnDataSource"},"glyph":{"id":"58884","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"58885","type":"Patch"},"selection_glyph":null,"view":{"id":"58887","type":"CDSView"}},"id":"58886","type":"GlyphRenderer"},{"attributes":{"dimension":1,"ticker":{"id":"58858","type":"BasicTicker"}},"id":"58861","type":"Grid"},{"attributes":{"data_source":{"id":"58898","type":"ColumnDataSource"},"glyph":{"id":"58899","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"58900","type":"Patch"},"selection_glyph":null,"view":{"id":"58902","type":"CDSView"}},"id":"58901","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"58852","type":"LinearAxis"}],"center":[{"id":"58856","type":"Grid"},{"id":"58861","type":"Grid"}],"left":[{"id":"58857","type":"LinearAxis"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"58886","type":"GlyphRenderer"},{"id":"58891","type":"GlyphRenderer"},{"id":"58896","type":"GlyphRenderer"},{"id":"58901","type":"GlyphRenderer"}],"title":{"id":"58903","type":"Title"},"toolbar":{"id":"58872","type":"Toolbar"},"x_range":{"id":"58844","type":"DataRange1d"},"x_scale":{"id":"58848","type":"LinearScale"},"y_range":{"id":"58846","type":"DataRange1d"},"y_scale":{"id":"58850","type":"LinearScale"}},"id":"58843","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"58867","type":"UndoTool"},{"attributes":{"source":{"id":"58898","type":"ColumnDataSource"}},"id":"58902","type":"CDSView"},{"attributes":{"callback":null,"overlay":{"id":"58919","type":"PolyAnnotation"}},"id":"58866","type":"LassoSelectTool"},{"attributes":{"formatter":{"id":"58907","type":"BasicTickFormatter"},"ticker":{"id":"58853","type":"BasicTicker"}},"id":"58852","type":"LinearAxis"},{"attributes":{},"id":"58905","type":"BasicTickFormatter"},{"attributes":{},"id":"58868","type":"RedoTool"},{"attributes":{},"id":"58907","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"58888","type":"ColumnDataSource"},"glyph":{"id":"58889","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"58890","type":"Patch"},"selection_glyph":null,"view":{"id":"58892","type":"CDSView"}},"id":"58891","type":"GlyphRenderer"},{"attributes":{},"id":"58869","type":"ResetTool"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"58890","type":"Patch"},{"attributes":{},"id":"58909","type":"UnionRenderers"},{"attributes":{},"id":"58870","type":"SaveTool"},{"attributes":{},"id":"58910","type":"Selection"},{"attributes":{"source":{"id":"58888","type":"ColumnDataSource"}},"id":"58892","type":"CDSView"},{"attributes":{"callback":null},"id":"58871","type":"HoverTool"},{"attributes":{},"id":"58915","type":"UnionRenderers"},{"attributes":{"source":{"id":"58883","type":"ColumnDataSource"}},"id":"58887","type":"CDSView"},{"attributes":{},"id":"58911","type":"UnionRenderers"},{"attributes":{"fill_alpha":0.75,"fill_color":"#2a2eec","line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"58894","type":"Patch"},{"attributes":{},"id":"58912","type":"Selection"},{"attributes":{"data_source":{"id":"58893","type":"ColumnDataSource"},"glyph":{"id":"58894","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"58895","type":"Patch"},"selection_glyph":null,"view":{"id":"58897","type":"CDSView"}},"id":"58896","type":"GlyphRenderer"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"58885","type":"Patch"},{"attributes":{},"id":"58916","type":"Selection"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"oLoizRL75D8dMYyOexXlP5mn9U/kL+U/FR5fEU1K5T+RlMjStWTlPw4LMpQef+U/ioGbVYeZ5T8G+AQX8LPlP4JubthYzuU//uTXmcHo5T96W0FbKgPmP/bRqhyTHeY/ckgU3vs35j/uvn2fZFLmP2o152DNbOY/5qtQIjaH5j9iIrrjnqHmP9+YI6UHvOY/Ww+NZnDW5j/XhfYn2fDmP1T8X+lBC+c/0HLJqqol5z9M6TJsE0DnP8hfnC18Wuc/RNYF7+R05z/ATG+wTY/nP8BMb7BNj+c/wExvsE2P5z9E1gXv5HTnP8hfnC18Wuc/TOkybBNA5z/QcsmqqiXnP1T8X+lBC+c/14X2J9nw5j9bD41mcNbmP9+YI6UHvOY/YiK6456h5j/mq1AiNofmP2o152DNbOY/7r59n2RS5j9ySBTe+zfmP/bRqhyTHeY/eltBWyoD5j/+5NeZwejlP4JubthYzuU/BvgEF/Cz5T+KgZtVh5nlPw4LMpQef+U/kZTI0rVk5T8VHl8RTUrlP5mn9U/kL+U/HTGMjnsV5T+guiLNEvvkP6C6Is0S++Q/","dtype":"float64","shape":[54]},"y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAdDcxhtQVA4B0NzGG1BUBajMBX+vEFQHV7qxxtKgZAeUJ2GL9dBkCytmnpwZEGQBxr0xkSwgZAL2zzUPjtBkAyKPNJeRoHQMTWMp69RAdAoHnH8fhvB0CCaoduHpoHQBoyRHHSxAdAivuPPZXxB0A89sETAh4IQLZxFmNGSwhAVIfPYpZ4CEBMxBzhgKQIQPGMd+TK0AhA9AMqwpP7CEBeMKxvmyUJQGtQlEkATAlA/I6dwYRvCUDUtfOJZIsJQPNQHo1roglAuB162zOwCUC3frUwHLUJQAAAAAAAAAAA","dtype":"float64","shape":[54]}},"selected":{"id":"58914","type":"Selection"},"selection_policy":{"id":"58913","type":"UnionRenderers"}},"id":"58893","type":"ColumnDataSource"},{"attributes":{"source":{"id":"58893","type":"ColumnDataSource"}},"id":"58897","type":"CDSView"},{"attributes":{},"id":"58862","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"58917","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"58846","type":"DataRange1d"},{"attributes":{"ticker":{"id":"58853","type":"BasicTicker"}},"id":"58856","type":"Grid"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"kU4w5DT94T8NxZmlnRfiP4k7A2cGMuI/BrJsKG9M4j+CKNbp12biP/6eP6tAgeI/ehWpbKmb4j/2ixIuErbiP3ICfO960OI/7njlsOPq4j9q705yTAXjP+ZluDO1H+M/Ytwh9R064z/eUou2hlTjP1rJ9HfvbuM/1z9eOViJ4z9Ttsf6wKPjP88sMbwpvuM/TKOafZLY4z/IGQQ/+/LjP0SQbQBkDeQ/wAbXwcwn5D88fUCDNULkP7jzqUSeXOQ/NGoTBgd35D+w4HzHb5HkPyxX5ojYq+Q/qM1PSkHG5D8kRLkLquDkPyREuQuq4OQ/JES5C6rg5D+ozU9KQcbkPyxX5ojYq+Q/sOB8x2+R5D80ahMGB3fkP7jzqUSeXOQ/PH1AgzVC5D/ABtfBzCfkP0SQbQBkDeQ/yBkEP/vy4z9Mo5p9ktjjP88sMbwpvuM/U7bH+sCj4z/XP145WInjP1rJ9HfvbuM/3lKLtoZU4z9i3CH1HTrjP+ZluDO1H+M/au9OckwF4z/ueOWw4+riP3ICfO960OI/9osSLhK24j96FalsqZviP/6eP6tAgeI/gijW6ddm4j8Gsmwob0ziP4k7A2cGMuI/DcWZpZ0X4j+RTjDkNP3hP5FOMOQ0/eE/","dtype":"float64","shape":[60]},"y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOsdQk0VrQlA6x1CTRWtCUCtYVxLEpoJQP1aj5XqdwlAtncIXpJJCUA+fQ12Qw0JQJXChPz+wghAUB7E6xduCEB9jSE0PQ4IQPHh7ZLIowdAoPg75U4zB0CBVYqVnr8GQFidiSErRgZA8ztnFlrQBUBmEWF621gFQMlh0OtL5gRAOMnMyMZ3BED43+VboQ0EQC+yS1pDqgNA02PxuwFMA0AJeE7fofcCQMUpRtPjqgJAMYCPXjdmAkA8exrmpCgCQKHvGX0z8gFA2ofY7CDCAUCdrFFRoZcBQJvDuQ4rcgFAO4Sid/9MAUA+zAFBRi0BQAAAAAAAAAAA","dtype":"float64","shape":[60]}},"selected":{"id":"58912","type":"Selection"},"selection_policy":{"id":"58911","type":"UnionRenderers"}},"id":"58888","type":"ColumnDataSource"},{"attributes":{},"id":"58853","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"58918","type":"BoxAnnotation"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"PMPYcbap5z+4OUIzH8TnPzSwq/SH3uc/sCYVtvD45z8snX53WRPoP6gT6DjCLeg/JYpR+ipI6D+hALu7k2LoPx13JH38fOg/me2NPmWX6D8WZPf/zbHoP5LaYME2zOg/DlHKgp/m6D+KxzNECAHpPwY+nQVxG+k/grQGx9k16T/+KnCIQlDpP3qh2Umrauk/9hdDCxSF6T9yjqzMfJ/pP+4EFo7luek/ant/T07U6T/m8egQt+7pP2JoUtIfCeo/4N67k4gj6j9cVSVV8T3qP9jLjhZaWOo/VEL418Jy6j/QuGGZK43qP0wvy1qUp+o/yKU0HP3B6j9EHJ7dZdzqP8CSB5/O9uo/PAlxYDcR6z+4f9ohoCvrPzT2Q+MIRus/sGytpHFg6z8s4xZm2nrrP6hZgCdDles/JtDp6Kuv6z+iRlOqFMrrPx69vGt95Os/mjMmLeb+6z8Wqo/uThnsP5Ig+a+3M+w/DpdicSBO7D+KDcwyiWjsPwaENfTxguw/gvqetVqd7D/+cAh3w7fsP3rncTgs0uw/9l3b+ZTs7D9y1ES7/QbtP+5KrnxmIe0/asEXPs877T/oN4H/N1btP2Su6sCgcO0/4CRUggmL7T9cm71DcqXtP9gRJwXbv+0/VIiQxkPa7T/Q/vmHrPTtP0x1Y0kVD+4/yOvMCn4p7j/I68wKfinuP8jrzAp+Ke4/THVjSRUP7j/Q/vmHrPTtP1SIkMZD2u0/2BEnBdu/7T9cm71DcqXtP+AkVIIJi+0/ZK7qwKBw7T/oN4H/N1btP2rBFz7PO+0/7kqufGYh7T9y1ES7/QbtP/Zd2/mU7Ow/eudxOCzS7D/+cAh3w7fsP4L6nrVanew/BoQ19PGC7D+KDcwyiWjsPw6XYnEgTuw/kiD5r7cz7D8Wqo/uThnsP5ozJi3m/us/Hr28a33k6z+iRlOqFMrrPybQ6eirr+s/qFmAJ0OV6z8s4xZm2nrrP7BsraRxYOs/NPZD4whG6z+4f9ohoCvrPzwJcWA3Ees/wJIHn8726j9EHJ7dZdzqP8ilNBz9weo/TC/LWpSn6j/QuGGZK43qP1RC+NfCcuo/2MuOFlpY6j9cVSVV8T3qP+Deu5OII+o/YmhS0h8J6j/m8egQt+7pP2p7f09O1Ok/7gQWjuW56T9yjqzMfJ/pP/YXQwsUhek/eqHZSatq6T/+KnCIQlDpP4K0BsfZNek/Bj6dBXEb6T+KxzNECAHpPw5RyoKf5ug/ktpgwTbM6D8WZPf/zbHoP5ntjT5ll+g/HXckffx86D+hALu7k2LoPyWKUfoqSOg/qBPoOMIt6D8snX53WRPoP7AmFbbw+Oc/NLCr9Ife5z+4OUIzH8TnPzzD2HG2qec/PMPYcbap5z8=","dtype":"float64","shape":[130]},"y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABRriIsTjKPwFGuIixOMo/NGGyc+5eyj8Dpaucf7nKP9fL/GtyQcs/Jhk3K8UBzD/jsvAW0P/MPw4AmRu1R84/YWlbRrHPzz8hu5VMqcvQPx1S1rH81dE/6D+umGIY0z9c7dFZ75HUP4M0JZcNP9Y/AyDGdtws2D9Wt3TOZlTaP54cu56ytdw/7wVo2EZV3z8PfXTmVhPhP5VWbXbFlOI/qqWWTygl5D+wOreV4L7lP97CURkRaOc/8adDOaQN6T/Ghyxu+K7qP/35JfSNSOw/ZeYc6u3W7T+uP7wD7U7vPzYRrXKHWvA/mAt5iH0D8T8GjUNWq6HxP/dUsTu5OPI/7x3bLsPJ8j+GNt9INlbzP9QRgiqC4PM/oUUmPP5p9D+7d2CTBff0P7oI1Oh6ifU/ka/dpCon9j9M+WVu98r2Pwp/6FDjePc/a4eM8Icx+D/bCfpEO/X4P1FXJJaywPk/tnTZEdSU+j/Ck4ZY/W77P6dxcOspTvw/Ut4x/yEz/T8BLTMXmRj+P9+3YB+u/v4/elWsdHjo/z8ZeY4xuGgAQJSUyWry2wBAhtCB16ZPAUCb+F57tr8BQH9w/RYyLwJAPNS3v0qbAkAWxLrgHAUDQDqGItxTbANA1ocjs2zPA0BuryDmIS4EQPOYjD3mhgRAjGybvtHbBEB5ah8xLykFQJbpydj4cQVAAAAAAAAAAAA=","dtype":"float64","shape":[130]}},"selected":{"id":"58916","type":"Selection"},"selection_policy":{"id":"58915","type":"UnionRenderers"}},"id":"58898","type":"ColumnDataSource"},{"attributes":{},"id":"58914","type":"Selection"},{"attributes":{"fill_alpha":0.75,"fill_color":"#2a2eec","line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"58889","type":"Patch"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"58919","type":"PolyAnnotation"},{"attributes":{"formatter":{"id":"58905","type":"BasicTickFormatter"},"ticker":{"id":"58858","type":"BasicTicker"}},"id":"58857","type":"LinearAxis"},{"attributes":{},"id":"58850","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"58862","type":"PanTool"},{"id":"58863","type":"BoxZoomTool"},{"id":"58864","type":"WheelZoomTool"},{"id":"58865","type":"BoxSelectTool"},{"id":"58866","type":"LassoSelectTool"},{"id":"58867","type":"UndoTool"},{"id":"58868","type":"RedoTool"},{"id":"58869","type":"ResetTool"},{"id":"58870","type":"SaveTool"},{"id":"58871","type":"HoverTool"}]},"id":"58872","type":"Toolbar"},{"attributes":{"callback":null},"id":"58844","type":"DataRange1d"},{"attributes":{"fill_alpha":0.75,"fill_color":"#2a2eec","line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"58899","type":"Patch"},{"attributes":{"callback":null,"overlay":{"id":"58918","type":"BoxAnnotation"}},"id":"58865","type":"BoxSelectTool"},{"attributes":{},"id":"58913","type":"UnionRenderers"},{"attributes":{},"id":"58864","type":"WheelZoomTool"},{"attributes":{"text":""},"id":"58903","type":"Title"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"laKjYx9E0z+Nj3bm8HjTP4Z8SWnCrdM/fmkc7JPi0z92Vu9uZRfUP25DwvE2TNQ/ZzCVdAiB1D9fHWj32bXUP1cKO3qr6tQ/T/cN/Xwf1T9I5OB/TlTVP0DRswIgidU/OL6GhfG91T8wq1kIw/LVPymYLIuUJ9Y/IYX/DWZc1j8ZctKQN5HWPxFfpRMJxtY/Ckx4ltr61j8COUsZrC/XP/olHpx9ZNc/8hLxHk+Z1z/r/8OhIM7XP+PsliTyAtg/29lpp8M32D/UxjwqlWzYP8yzD61modg/xKDiLzjW2D+8jbWyCQvZP7R6iDXbP9k/rWdbuKx02T+lVC47fqnZP51BAb5P3tk/li7UQCET2j+OG6fD8kfaP4YIekbEfNo/fvVMyZWx2j924h9MZ+baP2/P8s44G9s/Z7zFUQpQ2z9gqZjU24TbP1iWa1etuds/UIM+2n7u2z9IcBFdUCPcP0Bd5N8hWNw/OEq3YvOM3D8xN4rlxMHcPykkXWiW9tw/IhEw62cr3T8a/gJuOWDdPxLr1fAKld0/Ctioc9zJ3T8CxXv2rf7dP/qxTnl/M94/854h/FBo3j/ri/R+Ip3eP+R4xwH00d4/3GWahMUG3z/UUm0HlzvfP8w/QIpocN8/xCwTDTql3z+8GeaPC9rfP1qDXIluB+A/1vnFStch4D9TcC8MQDzgP8/mmM2oVuA/S10CjxFx4D/H02tQeovgP0NK1RHjpeA/wMA+00vA4D88N6iUtNrgP7itEVYd9eA/NCR7F4YP4T+wmuTY7inhPywRTppXROE/qIe3W8Be4T8k/iAdKXnhP6B0it6Rk+E/HOvzn/qt4T+YYV1hY8jhPxXYxiLM4uE/FdjGIszi4T8V2MYizOLhP5hhXWFjyOE/HOvzn/qt4T+gdIrekZPhPyT+IB0peeE/qIe3W8Be4T8sEU6aV0ThP7Ca5NjuKeE/NCR7F4YP4T+4rRFWHfXgPzw3qJS02uA/wMA+00vA4D9DStUR46XgP8fTa1B6i+A/S10CjxFx4D/P5pjNqFbgP1NwLwxAPOA/1vnFStch4D9ag1yJbgfgP7wZ5o8L2t8/xCwTDTql3z/MP0CKaHDfP9RSbQeXO98/3GWahMUG3z/keMcB9NHeP+uL9H4ind4/854h/FBo3j/6sU55fzPePwLFe/at/t0/Ctioc9zJ3T8S69XwCpXdPxr+Am45YN0/IhEw62cr3T8pJF1olvbcPzE3iuXEwdw/OEq3YvOM3D9AXeTfIVjcP0hwEV1QI9w/UIM+2n7u2z9YlmtXrbnbP2CpmNTbhNs/Z7zFUQpQ2z9vz/LOOBvbP3biH0xn5to/fvVMyZWx2j+GCHpGxHzaP44bp8PyR9o/li7UQCET2j+dQQG+T97ZP6VULjt+qdk/rWdbuKx02T+0eog12z/ZP7yNtbIJC9k/xKDiLzjW2D/Msw+tZqHYP9TGPCqVbNg/29lpp8M32D/j7JYk8gLYP+v/w6Egztc/8hLxHk+Z1z/6JR6cfWTXPwI5SxmsL9c/Ckx4ltr61j8RX6UTCcbWPxly0pA3kdY/IYX/DWZc1j8pmCyLlCfWPzCrWQjD8tU/OL6GhfG91T9A0bMCIInVP0jk4H9OVNU/T/cN/Xwf1T9XCjt6q+rUP18daPfZtdQ/ZzCVdAiB1D9uQ8LxNkzUP3ZW725lF9Q/fmkc7JPi0z+GfElpwq3TP42PdubweNM/laKjYx9E0z+VoqNjH0TTPw==","dtype":"float64","shape":[164]},"y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD2oKtcEOAUAPagq1wQ4BQDInwm367gBAFsHcrczMAED6kEpxWqUAQA7P7v5jegBASpV9I5JKAECorpckphEAQN3CosQ/pP8/k6B5sCQZ/z/1frdXP37+PwXSJEk82/0/HNM8qK4q/T8HOz69mXL8P6UWiwq0svs/1ZYMj4ru+j+USZRwlSf6P+ilKFhLYfk/OVBFgXOd+D8/uhz0vtz3P3aHK78pHfc/KomLlv5k9j8jNtkI4q31P409Ylmt/PQ/w4T4hpRL9D+R2zCOYaDzP26VJQJp+vI/Za94kxRY8j9J+rOrqrvxP3GWOfmTJfE/W7tmLXSV8D9uJDINQAzwPyLuUvGEHu8/MxiR+Gor7j8Ky5+Vm1LtP1aCAhGdiOw/V3kbv+jT6z8ZuQoy5zDrPyXxApHNmeo/UoK+YE0Q6j9hrgPAz4jpP3j8thjoBuk/Tf4nPKSI6D+sQBgZZwToP5+leXz7e+c/G7fC5pXt5j9HEOyEzVLmPzCy3B53sOU/Gv/e8KoG5T+JaTZ92VLkPydbXr3/muM/IMkgzzPj4j8VkXWj7yziP/Dd/XAid+E/lOXF6d/E4D+QKx6JHhngP7WKGYcJ7N4/MoGRMJ6+3T8snCrjIpvcP2tuywQ5l9s/FFPmZgSi2j+7t+ddAsLZP1YxDbbv9Ng/z+FgHI862D83xmKgK43XP8VeQahr7dY/bEJKPKBf1j+8up4Y0NfVP77MRYTOW9U/QHTofQfq1D/Wc4Veqn/UP8d0KOiRJdQ/wOLzMDPR0z/We/WzBInTP45X8f1aQ9M/No4Ykg0D0z+gGbac8szSPyv5rzbknNI/yr61KXp70j95rKEryGHSP6k1Ab+nTtI/dB3YiiFE0j8AAAAAAAAAAA==","dtype":"float64","shape":[164]}},"selected":{"id":"58910","type":"Selection"},"selection_policy":{"id":"58909","type":"UnionRenderers"}},"id":"58883","type":"ColumnDataSource"},{"attributes":{},"id":"58848","type":"LinearScale"},{"attributes":{"fill_alpha":0.75,"fill_color":"#2a2eec","line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"58884","type":"Patch"},{"attributes":{},"id":"58858","type":"BasicTicker"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"58900","type":"Patch"},{"attributes":{"overlay":{"id":"58917","type":"BoxAnnotation"}},"id":"58863","type":"BoxZoomTool"}],"root_ids":["58843"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"8829f719-12e4-4067-a445-e9f09b379e13","roots":{"58843":"e9554c0e-26bf-411d-b751-c921d458098e"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();