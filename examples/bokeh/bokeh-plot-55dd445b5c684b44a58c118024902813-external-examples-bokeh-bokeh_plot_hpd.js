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
      };var element = document.getElementById("7ca7121c-b004-45d2-969f-8b952999e1b9");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '7ca7121c-b004-45d2-969f-8b952999e1b9' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"9dc92ca0-b051-4dc9-9c91-30c67c2b84ac":{"roots":{"references":[{"attributes":{},"id":"57837","type":"LinearScale"},{"attributes":{"source":{"id":"57875","type":"ColumnDataSource"}},"id":"57879","type":"CDSView"},{"attributes":{},"id":"57840","type":"BasicTicker"},{"attributes":{},"id":"57856","type":"ResetTool"},{"attributes":{},"id":"57854","type":"UndoTool"},{"attributes":{},"id":"57889","type":"Selection"},{"attributes":{"formatter":{"id":"57882","type":"BasicTickFormatter"},"ticker":{"id":"57845","type":"BasicTicker"}},"id":"57844","type":"LinearAxis"},{"attributes":{"text":""},"id":"57880","type":"Title"},{"attributes":{"overlay":{"id":"57890","type":"BoxAnnotation"}},"id":"57850","type":"BoxZoomTool"},{"attributes":{},"id":"57845","type":"BasicTicker"},{"attributes":{},"id":"57886","type":"UnionRenderers"},{"attributes":{},"id":"57888","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"57831","type":"DataRange1d"},{"attributes":{},"id":"57851","type":"WheelZoomTool"},{"attributes":{},"id":"57835","type":"LinearScale"},{"attributes":{"source":{"id":"57870","type":"ColumnDataSource"}},"id":"57874","type":"CDSView"},{"attributes":{},"id":"57857","type":"SaveTool"},{"attributes":{},"id":"57887","type":"Selection"},{"attributes":{"callback":null},"id":"57858","type":"HoverTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"57849","type":"PanTool"},{"id":"57850","type":"BoxZoomTool"},{"id":"57851","type":"WheelZoomTool"},{"id":"57852","type":"BoxSelectTool"},{"id":"57853","type":"LassoSelectTool"},{"id":"57854","type":"UndoTool"},{"id":"57855","type":"RedoTool"},{"id":"57856","type":"ResetTool"},{"id":"57857","type":"SaveTool"},{"id":"57858","type":"HoverTool"}]},"id":"57859","type":"Toolbar"},{"attributes":{"fill_alpha":0.5,"fill_color":"red","line_alpha":0,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"57871","type":"Patch"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"57890","type":"BoxAnnotation"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"57872","type":"Patch"},{"attributes":{"ticker":{"id":"57840","type":"BasicTicker"}},"id":"57843","type":"Grid"},{"attributes":{"dimension":1,"ticker":{"id":"57845","type":"BasicTicker"}},"id":"57848","type":"Grid"},{"attributes":{"callback":null,"overlay":{"id":"57892","type":"PolyAnnotation"}},"id":"57853","type":"LassoSelectTool"},{"attributes":{},"id":"57884","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"57891","type":"BoxAnnotation"},{"attributes":{},"id":"57882","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"57875","type":"ColumnDataSource"},"glyph":{"id":"57876","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"57877","type":"Line"},"selection_glyph":null,"view":{"id":"57879","type":"CDSView"}},"id":"57878","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"57839","type":"LinearAxis"}],"center":[{"id":"57843","type":"Grid"},{"id":"57848","type":"Grid"}],"left":[{"id":"57844","type":"LinearAxis"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"57873","type":"GlyphRenderer"},{"id":"57878","type":"GlyphRenderer"}],"title":{"id":"57880","type":"Title"},"toolbar":{"id":"57859","type":"Toolbar"},"x_range":{"id":"57831","type":"DataRange1d"},"x_scale":{"id":"57835","type":"LinearScale"},"y_range":{"id":"57833","type":"DataRange1d"},"y_scale":{"id":"57837","type":"LinearScale"}},"id":"57830","subtype":"Figure","type":"Plot"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"57877","type":"Line"},{"attributes":{"callback":null,"overlay":{"id":"57891","type":"BoxAnnotation"}},"id":"57852","type":"BoxSelectTool"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"kcSbzHVcCMDMMWCVQtwFwJE2+FyUvgPAmIw65/2iAcD/nDf/sXAAwFkt+EOoLP+/PyBTSzNB+r9Kzq4YtP35v1DYCJJ2wvm/K6/T8irq9r+hAKUeq8b2v/m3nUzzlPa/n3CnuzAQ9b8LWDeieuXzv+QvXGN4ofK/QosaQKf08L/Snvo9Dinwv6lJkcFgXO2/bDnUPumo7L8JcK24G5Dsv4+SP3lPuOq/TiybcwkW6b8b1C9rVCLov8C3qAfkVee/X+Ri5vT25r8M98eD0znmv26TDzFeauW/pJ3+erhn5b/Gwtq5Curjv/2PBWY81uK/CuOp8+AW4r/Qqx+SLHrhvySSsfASR+C/HCzmjCjx3r/7goyK97jevwcUJw+e1ty/znN2CSdB3L/VTULeX4XYvy/MzjH+/de/WCCIXr+i17/txRviDkDVvxQFMnWz7NK/fgdRXYVY0r/wHWQGyxPRv2SE7CpwKtC/hhczQssIzr972Of4H+rJvz+QY1mTfMi/ik0U1NJWxL8eae5cl5exv6xlQ8OXXKO/1VohVBMNl795XO5EQruNv4ooZnVSm7M/UTTnEZ1Bvj9k/LiNmdrAPxFCco0GucY/twOZsUJOxz9J9ozCM5jMP1QELmojEc0/uQXLcFob0j/rQWWDER7VP3h40yw0M9U/E0X9+TJ21T8BNewHxGnbPztJWjCRIN0/seNP8NCE3T9joxt034TdPwdDcjZcgt4/t2VCL41F4T91ARclOiTiP2/BWFVAdOI/PfHWkkKR4z861rz4sUTkP1lf1zQeyeQ/0PXXOVVZ5T8kUfgCbLTmP8wcCU8uXOc/P0J9vCGp5z+iesm5xKDoP7G+TRLtluo//ETsPaeC7D/KQ8q/2qXtPyfS+MI6dO4/OKjFH+so7z8s1gDSQFrvP1J0Uc2nae8/5RCmbJyf7z9R1+wP+NTvP8TLZu+7h/E/MyerQjWj8j/KF2+tOLDyP7Iw9eSVHfM/yvmJ6c1i8z/Qi8m74EH1P8aNMjOlPPc/IvfNT62v+D9A5YHVDhb5P+3ixCqwFf4/pr1w1A4aAUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"vO2QzSiO3j9onD/VekfkP96SD0bXgug/0OaKMQS67D8CxpABnB7vP1TpA96rafA/4G9WWmbf8j/bmKjzJQHzP9iT+7bEHvM/aiiWhuqK9D+wf61wqpz0PwQksVmGtfQ/sEcsoud39T/6U+SuQg32Pw7oUc5Dr/Y/X7ryX6yF9z+XsALheOv3P5atm8/nqPg/pfFKsMXV+D/+o9QR+dv4P1wbsCHsUfk/7DQZo326+T/5CjTlavf5PxDSFf6GKvo/6EZnxkJC+j89Ag4fi3H6PyQbvHNopfo/l1hA4RGm+j9OT4lRfQX7PwGcfuZwSvs/PocVw0d6+z8MFXjbdKH7P3eb00M77vs/fDpj7toh/D+hb64O4Sj8P38dGz4sZfw/hjHRHtt3/D9FtjcEVO/8P3omxjlAAP0/9fsuFKgL/T9Ch7wj/lf9P16/WZFpov0/EN9VVO+0/T9CfDOfht39P3Rvovqx+v0/iM7cS3Mf/j94gnEAXmH+P/zGaco2eP4/J7u+0pK6/j+3jBhFQ3P/P2ny8qCNsv8/Sr1X2eXR/z+kEbu9ROL/P6KY1UltTgBA0ZxHdAZ5AEDjx23M1IYAQBGSazTItQBAHsiMFXK6AECyZxSeweQAQCNwURuJ6ABAXLAMp7UhAUAfVDYY4VEBQIg3zUIzUwFAUdSfL2NXAUBQw35AnLYBQJSkBRMJ0gFAO/4ED03YAUA2ukH3TdgBQDAkZ8Ml6AFAt0zopbEoAkAv4KJEh0QCQC4YqwqITgJAKN5aUihyAkDHmhc/logCQOvrmsYjmQJAuv46pyqrAkAkCl+AjdYCQJoj4cmF6wJASKiPNyT1AkBULzmXGBQDQNa3SaLdUgNAoIi951SQA0B5SPlXu7QDQEUaX1iHzgNAB7X4Yx3lA0DGGkAaSOsDQIouqvk07QNAHcKUjfPzA0Dqmv0Bn/oDQPGy2fvuYQRAzcmqUM2oBEDyxVsrDqwEQCxMPXllxwRAcn5ierPYBED0YvIueFAFQHKjzEwpzwVAyH3zU+srBkBQeWC1g0UGQLs4sQpshQdA0144ageNCEA=","dtype":"float64","shape":[100]}},"selected":{"id":"57889","type":"Selection"},"selection_policy":{"id":"57888","type":"UnionRenderers"}},"id":"57875","type":"ColumnDataSource"},{"attributes":{},"id":"57855","type":"RedoTool"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[400]},"y":{"__ndarray__":"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","dtype":"float64","shape":[400]}},"selected":{"id":"57887","type":"Selection"},"selection_policy":{"id":"57886","type":"UnionRenderers"}},"id":"57870","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"57870","type":"ColumnDataSource"},"glyph":{"id":"57871","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"57872","type":"Patch"},"selection_glyph":null,"view":{"id":"57874","type":"CDSView"}},"id":"57873","type":"GlyphRenderer"},{"attributes":{"line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"57876","type":"Line"},{"attributes":{"callback":null},"id":"57833","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"57892","type":"PolyAnnotation"},{"attributes":{},"id":"57849","type":"PanTool"},{"attributes":{"formatter":{"id":"57884","type":"BasicTickFormatter"},"ticker":{"id":"57840","type":"BasicTicker"}},"id":"57839","type":"LinearAxis"}],"root_ids":["57830"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"9dc92ca0-b051-4dc9-9c91-30c67c2b84ac","roots":{"57830":"7ca7121c-b004-45d2-969f-8b952999e1b9"}}];
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