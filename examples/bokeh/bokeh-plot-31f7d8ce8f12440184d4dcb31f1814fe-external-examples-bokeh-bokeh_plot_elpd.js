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
      };var element = document.getElementById("96501ada-1621-4937-aa44-98599b152e86");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '96501ada-1621-4937-aa44-98599b152e86' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"a85e9f27-4f86-4c55-9da8-f0e8f7d65ef4":{"roots":{"references":[{"attributes":{},"id":"56435","type":"WheelZoomTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6.0},"x":{"field":"x"},"y":{"field":"y"}},"id":"56455","type":"Cross"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"56470","type":"PolyAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"56433","type":"PanTool"},{"id":"56434","type":"BoxZoomTool"},{"id":"56435","type":"WheelZoomTool"},{"id":"56436","type":"BoxSelectTool"},{"id":"56437","type":"LassoSelectTool"},{"id":"56438","type":"UndoTool"},{"id":"56439","type":"RedoTool"},{"id":"56440","type":"ResetTool"},{"id":"56441","type":"SaveTool"},{"id":"56442","type":"HoverTool"}]},"id":"56443","type":"Toolbar"},{"attributes":{"callback":null,"overlay":{"id":"56469","type":"BoxAnnotation"}},"id":"56436","type":"BoxSelectTool"},{"attributes":{},"id":"56433","type":"PanTool"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7],"y":{"__ndarray__":"gKw/FCDkuj8AeHliZVWePwCAiHewTyW/AI7er++Hoz+AHYmsYnG0vwCgk05GA0g/gJ3Q558ruT8A3aKQ7GmgPw==","dtype":"float64","shape":[8]}},"selected":{"id":"56467","type":"Selection"},"selection_policy":{"id":"56466","type":"UnionRenderers"}},"id":"56454","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"56442","type":"HoverTool"},{"attributes":{},"id":"56421","type":"LinearScale"},{"attributes":{"data_source":{"id":"56454","type":"ColumnDataSource"},"glyph":{"id":"56455","type":"Cross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"56456","type":"Cross"},"selection_glyph":null,"view":{"id":"56458","type":"CDSView"}},"id":"56457","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"56468","type":"BoxAnnotation"},{"attributes":{},"id":"56429","type":"BasicTicker"},{"attributes":{"callback":null},"id":"56417","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"56469","type":"BoxAnnotation"},{"attributes":{"dimension":1,"ticker":{"id":"56429","type":"BasicTicker"}},"id":"56432","type":"Grid"},{"attributes":{"ticker":{"id":"56424","type":"BasicTicker"}},"id":"56427","type":"Grid"},{"attributes":{},"id":"56466","type":"UnionRenderers"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"56462","type":"BasicTickFormatter"},"ticker":{"id":"56429","type":"BasicTicker"}},"id":"56428","type":"LinearAxis"},{"attributes":{},"id":"56440","type":"ResetTool"},{"attributes":{},"id":"56467","type":"Selection"},{"attributes":{"below":[{"id":"56423","type":"LinearAxis"}],"center":[{"id":"56427","type":"Grid"},{"id":"56432","type":"Grid"}],"left":[{"id":"56428","type":"LinearAxis"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"56457","type":"GlyphRenderer"}],"title":{"id":"56459","type":"Title"},"toolbar":{"id":"56443","type":"Toolbar"},"x_range":{"id":"56415","type":"DataRange1d"},"x_scale":{"id":"56419","type":"LinearScale"},"y_range":{"id":"56417","type":"DataRange1d"},"y_scale":{"id":"56421","type":"LinearScale"}},"id":"56414","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"56439","type":"RedoTool"},{"attributes":{},"id":"56462","type":"BasicTickFormatter"},{"attributes":{},"id":"56419","type":"LinearScale"},{"attributes":{"formatter":{"id":"56464","type":"BasicTickFormatter"},"ticker":{"id":"56424","type":"BasicTicker"}},"id":"56423","type":"LinearAxis"},{"attributes":{},"id":"56424","type":"BasicTicker"},{"attributes":{},"id":"56464","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6.0},"x":{"field":"x"},"y":{"field":"y"}},"id":"56456","type":"Cross"},{"attributes":{},"id":"56441","type":"SaveTool"},{"attributes":{"text":"Centered eight - Non centered eight"},"id":"56459","type":"Title"},{"attributes":{"callback":null},"id":"56415","type":"DataRange1d"},{"attributes":{"overlay":{"id":"56468","type":"BoxAnnotation"}},"id":"56434","type":"BoxZoomTool"},{"attributes":{"callback":null,"overlay":{"id":"56470","type":"PolyAnnotation"}},"id":"56437","type":"LassoSelectTool"},{"attributes":{},"id":"56438","type":"UndoTool"},{"attributes":{"source":{"id":"56454","type":"ColumnDataSource"}},"id":"56458","type":"CDSView"}],"root_ids":["56414"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"a85e9f27-4f86-4c55-9da8-f0e8f7d65ef4","roots":{"56414":"96501ada-1621-4937-aa44-98599b152e86"}}];
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