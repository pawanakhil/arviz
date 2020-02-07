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
      };var element = document.getElementById("b2adc620-6b93-4e19-aab7-15edcedca426");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'b2adc620-6b93-4e19-aab7-15edcedca426' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"c1c941d8-520a-4c8e-ae06-c1de7e2dc565":{"roots":{"references":[{"attributes":{"ticker":{"id":"56893","type":"BasicTicker"}},"id":"56896","type":"Grid"},{"attributes":{"data_source":{"id":"56923","type":"ColumnDataSource"},"glyph":{"id":"56924","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"56925","type":"Circle"},"selection_glyph":null,"view":{"id":"56927","type":"CDSView"}},"id":"56926","type":"GlyphRenderer"},{"attributes":{"source":{"id":"56923","type":"ColumnDataSource"}},"id":"56927","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"56925","type":"Circle"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"56928","type":"Dash"},{"attributes":{"data_source":{"id":"56929","type":"ColumnDataSource"},"glyph":{"id":"56928","type":"Dash"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"56931","type":"CDSView"}},"id":"56930","type":"GlyphRenderer"},{"attributes":{},"id":"56939","type":"BasicTickFormatter"},{"attributes":{},"id":"56937","type":"BasicTickFormatter"},{"attributes":{},"id":"56909","type":"ResetTool"},{"attributes":{"dimension":1,"ticker":{"id":"56898","type":"BasicTicker"}},"id":"56901","type":"Grid"},{"attributes":{"line_alpha":{"value":0.7},"line_width":{"value":1.5},"location":0},"id":"56932","type":"Span"},{"attributes":{"text":"mu"},"id":"56934","type":"Title"},{"attributes":{"callback":null,"data":{"rug_x":{"__ndarray__":"u/QnuP7V5z9SIsxa1SLgPw==","dtype":"float64","shape":[2]},"rug_y":{"__ndarray__":"nB0+wbWyacCcHT7BtbJpwA==","dtype":"float64","shape":[2]}},"selected":{"id":"56944","type":"Selection"},"selection_policy":{"id":"56943","type":"UnionRenderers"}},"id":"56929","type":"ColumnDataSource"},{"attributes":{"children":[[{"id":"56883","subtype":"Figure","type":"Plot"},0,0]]},"id":"56949","type":"GridBox"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"56902","type":"PanTool"},{"id":"56903","type":"BoxZoomTool"},{"id":"56904","type":"WheelZoomTool"},{"id":"56905","type":"BoxSelectTool"},{"id":"56906","type":"LassoSelectTool"},{"id":"56907","type":"UndoTool"},{"id":"56908","type":"RedoTool"},{"id":"56909","type":"ResetTool"},{"id":"56910","type":"SaveTool"},{"id":"56911","type":"HoverTool"}]},"id":"56912","type":"Toolbar"},{"attributes":{},"id":"56942","type":"Selection"},{"attributes":{},"id":"56943","type":"UnionRenderers"},{"attributes":{},"id":"56890","type":"LinearScale"},{"attributes":{},"id":"56944","type":"Selection"},{"attributes":{"overlay":{"id":"56945","type":"BoxAnnotation"}},"id":"56903","type":"BoxZoomTool"},{"attributes":{"callback":null,"overlay":{"id":"56947","type":"PolyAnnotation"}},"id":"56906","type":"LassoSelectTool"},{"attributes":{"callback":null},"id":"56886","type":"DataRange1d"},{"attributes":{},"id":"56910","type":"SaveTool"},{"attributes":{"callback":null},"id":"56884","type":"DataRange1d"},{"attributes":{},"id":"56893","type":"BasicTicker"},{"attributes":{},"id":"56898","type":"BasicTicker"},{"attributes":{},"id":"56941","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"56947","type":"PolyAnnotation"},{"attributes":{"source":{"id":"56929","type":"ColumnDataSource"}},"id":"56931","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"56946","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"56924","type":"Circle"},{"attributes":{},"id":"56904","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"56945","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"56911","type":"HoverTool"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"56939","type":"BasicTickFormatter"},"ticker":{"id":"56893","type":"BasicTicker"}},"id":"56892","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAAACamZmZmZmpP5qZmZmZmbk/NDMzMzMzwz+amZmZmZnJPwAAAAAAANA/NDMzMzMz0z9nZmZmZmbWP5qZmZmZmdk/zczMzMzM3D8AAAAAAADgP5qZmZmZmeE/NDMzMzMz4z/NzMzMzMzkP2dmZmZmZuY/AAAAAAAA6D+amZmZmZnpPzQzMzMzM+s/zczMzMzM7D9nZmZmZmbuPw==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"PSWUrfrllUC6ZTfE07ObQIHSxpixD6BAXutlA2Fon0AWemawUmmdQBJdptJ4v59A48F0NdPPm0BhLg6FQP6cQNT8SMHKBJ1AN/hQuCybnECYCNGlG7+ZQOL2UqcslZtAhDgC8IHHmkDe0e+ORHOcQJp7JDyiB6BAxVCwvOY1n0BSmX0dHQ6gQFTe5JuCLJtAHVMIAw/Em0COFXr8JyGYQA==","dtype":"float64","shape":[20]}},"selected":{"id":"56942","type":"Selection"},"selection_policy":{"id":"56941","type":"UnionRenderers"}},"id":"56923","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"56892","type":"LinearAxis"}],"center":[{"id":"56896","type":"Grid"},{"id":"56901","type":"Grid"}],"left":[{"id":"56897","type":"LinearAxis"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"56926","type":"GlyphRenderer"},{"id":"56930","type":"GlyphRenderer"},{"id":"56932","type":"Span"},{"id":"56933","type":"Span"}],"title":{"id":"56934","type":"Title"},"toolbar":{"id":"56912","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"56884","type":"DataRange1d"},"x_scale":{"id":"56888","type":"LinearScale"},"y_range":{"id":"56886","type":"DataRange1d"},"y_scale":{"id":"56890","type":"LinearScale"}},"id":"56883","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"56907","type":"UndoTool"},{"attributes":{},"id":"56902","type":"PanTool"},{"attributes":{},"id":"56888","type":"LinearScale"},{"attributes":{"tools":[{"id":"56902","type":"PanTool"},{"id":"56903","type":"BoxZoomTool"},{"id":"56904","type":"WheelZoomTool"},{"id":"56905","type":"BoxSelectTool"},{"id":"56906","type":"LassoSelectTool"},{"id":"56907","type":"UndoTool"},{"id":"56908","type":"RedoTool"},{"id":"56909","type":"ResetTool"},{"id":"56910","type":"SaveTool"},{"id":"56911","type":"HoverTool"}]},"id":"56950","type":"ProxyToolbar"},{"attributes":{"callback":null,"overlay":{"id":"56946","type":"BoxAnnotation"}},"id":"56905","type":"BoxSelectTool"},{"attributes":{"toolbar":{"id":"56950","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"56951","type":"ToolbarBox"},{"attributes":{"line_color":{"value":"red"},"line_dash":[6],"line_width":{"value":3},"location":400},"id":"56933","type":"Span"},{"attributes":{"children":[{"id":"56951","type":"ToolbarBox"},{"id":"56949","type":"GridBox"}]},"id":"56952","type":"Column"},{"attributes":{},"id":"56908","type":"RedoTool"},{"attributes":{"axis_label":"ESS for small intervals","formatter":{"id":"56937","type":"BasicTickFormatter"},"ticker":{"id":"56898","type":"BasicTicker"}},"id":"56897","type":"LinearAxis"}],"root_ids":["56952"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"c1c941d8-520a-4c8e-ae06-c1de7e2dc565","roots":{"56952":"b2adc620-6b93-4e19-aab7-15edcedca426"}}];
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