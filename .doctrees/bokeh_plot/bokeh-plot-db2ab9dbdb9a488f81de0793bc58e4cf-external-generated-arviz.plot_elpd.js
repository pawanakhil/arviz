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
      };var element = document.getElementById("1a1b1dad-69e7-4ea4-8b3c-d213ed44d06c");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '1a1b1dad-69e7-4ea4-8b3c-d213ed44d06c' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"7e3d67cb-995b-4774-b58e-afe7d87aa039":{"roots":{"references":[{"attributes":{"fill_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6.0},"x":{"field":"x"},"y":{"field":"y"}},"id":"80317","type":"Cross"},{"attributes":{},"id":"80329","type":"Selection"},{"attributes":{},"id":"80286","type":"BasicTicker"},{"attributes":{"callback":null,"overlay":{"id":"80332","type":"PolyAnnotation"}},"id":"80299","type":"LassoSelectTool"},{"attributes":{"ticker":{"id":"80286","type":"BasicTicker"}},"id":"80289","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"80330","type":"BoxAnnotation"},{"attributes":{"callback":null,"overlay":{"id":"80331","type":"BoxAnnotation"}},"id":"80298","type":"BoxSelectTool"},{"attributes":{"overlay":{"id":"80330","type":"BoxAnnotation"}},"id":"80296","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"80331","type":"BoxAnnotation"},{"attributes":{},"id":"80297","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"80332","type":"PolyAnnotation"},{"attributes":{},"id":"80328","type":"UnionRenderers"},{"attributes":{"below":[{"id":"80285","type":"LinearAxis"}],"center":[{"id":"80289","type":"Grid"},{"id":"80294","type":"Grid"}],"left":[{"id":"80290","type":"LinearAxis"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"80319","type":"GlyphRenderer"}],"title":{"id":"80321","type":"Title"},"toolbar":{"id":"80305","type":"Toolbar"},"x_range":{"id":"80277","type":"DataRange1d"},"x_scale":{"id":"80281","type":"LinearScale"},"y_range":{"id":"80279","type":"DataRange1d"},"y_scale":{"id":"80283","type":"LinearScale"}},"id":"80276","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"80277","type":"DataRange1d"},{"attributes":{},"id":"80300","type":"UndoTool"},{"attributes":{"data_source":{"id":"80316","type":"ColumnDataSource"},"glyph":{"id":"80317","type":"Cross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"80318","type":"Cross"},"selection_glyph":null,"view":{"id":"80320","type":"CDSView"}},"id":"80319","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6.0},"x":{"field":"x"},"y":{"field":"y"}},"id":"80318","type":"Cross"},{"attributes":{},"id":"80301","type":"RedoTool"},{"attributes":{},"id":"80295","type":"PanTool"},{"attributes":{},"id":"80281","type":"LinearScale"},{"attributes":{},"id":"80302","type":"ResetTool"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7],"y":{"__ndarray__":"gKw/FCDkuj8AeHliZVWePwCAiHewTyW/AI7er++Hoz+AHYmsYnG0vwCgk05GA0g/gJ3Q558ruT8A3aKQ7GmgPw==","dtype":"float64","shape":[8]}},"selected":{"id":"80329","type":"Selection"},"selection_policy":{"id":"80328","type":"UnionRenderers"}},"id":"80316","type":"ColumnDataSource"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"80324","type":"BasicTickFormatter"},"ticker":{"id":"80291","type":"BasicTicker"}},"id":"80290","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"80295","type":"PanTool"},{"id":"80296","type":"BoxZoomTool"},{"id":"80297","type":"WheelZoomTool"},{"id":"80298","type":"BoxSelectTool"},{"id":"80299","type":"LassoSelectTool"},{"id":"80300","type":"UndoTool"},{"id":"80301","type":"RedoTool"},{"id":"80302","type":"ResetTool"},{"id":"80303","type":"SaveTool"},{"id":"80304","type":"HoverTool"}]},"id":"80305","type":"Toolbar"},{"attributes":{"callback":null},"id":"80304","type":"HoverTool"},{"attributes":{},"id":"80283","type":"LinearScale"},{"attributes":{"source":{"id":"80316","type":"ColumnDataSource"}},"id":"80320","type":"CDSView"},{"attributes":{"text":"centered model - non centered model"},"id":"80321","type":"Title"},{"attributes":{},"id":"80303","type":"SaveTool"},{"attributes":{},"id":"80324","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"80326","type":"BasicTickFormatter"},"ticker":{"id":"80286","type":"BasicTicker"}},"id":"80285","type":"LinearAxis"},{"attributes":{},"id":"80326","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"ticker":{"id":"80291","type":"BasicTicker"}},"id":"80294","type":"Grid"},{"attributes":{"callback":null},"id":"80279","type":"DataRange1d"},{"attributes":{},"id":"80291","type":"BasicTicker"}],"root_ids":["80276"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"7e3d67cb-995b-4774-b58e-afe7d87aa039","roots":{"80276":"1a1b1dad-69e7-4ea4-8b3c-d213ed44d06c"}}];
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