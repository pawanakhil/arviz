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
      };var element = document.getElementById("21b1e274-8365-4f11-83a4-07d81ec0ca55");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '21b1e274-8365-4f11-83a4-07d81ec0ca55' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"16c30173-bad2-4e8e-87ef-5125af3307aa":{"roots":{"references":[{"attributes":{},"id":"56237","type":"LinearScale"},{"attributes":{},"id":"56315","type":"BasicTickFormatter"},{"attributes":{"ticker":{"id":"56240","type":"BasicTicker"}},"id":"56243","type":"Grid"},{"attributes":{},"id":"56277","type":"BasicTicker"},{"attributes":{"text":""},"id":"56299","type":"Title"},{"attributes":{"formatter":{"id":"56315","type":"BasicTickFormatter"},"ticker":{"id":"56277","type":"BasicTicker"}},"id":"56276","type":"LinearAxis"},{"attributes":{},"id":"56240","type":"BasicTicker"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"56310","type":"Line"},{"attributes":{"source":{"id":"56294","type":"ColumnDataSource"}},"id":"56298","type":"CDSView"},{"attributes":{"callback":null},"id":"56263","type":"DataRange1d"},{"attributes":{},"id":"56338","type":"UnionRenderers"},{"attributes":{},"id":"56245","type":"BasicTicker"},{"attributes":{},"id":"56301","type":"BasicTickFormatter"},{"attributes":{"items":[{"id":"56307","type":"LegendItem"}]},"id":"56306","type":"Legend"},{"attributes":{},"id":"56235","type":"LinearScale"},{"attributes":{"below":[{"id":"56271","type":"LinearAxis"}],"center":[{"id":"56275","type":"Grid"},{"id":"56280","type":"Grid"},{"id":"56320","type":"Legend"}],"left":[{"id":"56276","type":"LinearAxis"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"56311","type":"GlyphRenderer"}],"title":{"id":"56313","type":"Title"},"toolbar":{"id":"56287","type":"Toolbar"},"x_range":{"id":"56263","type":"DataRange1d"},"x_scale":{"id":"56267","type":"LinearScale"},"y_range":{"id":"56265","type":"DataRange1d"},"y_scale":{"id":"56269","type":"LinearScale"}},"id":"56262","subtype":"Figure","type":"Plot"},{"attributes":{"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"56309","type":"Line"},{"attributes":{},"id":"56335","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"56265","type":"DataRange1d"},{"attributes":{"formatter":{"id":"56317","type":"BasicTickFormatter"},"ticker":{"id":"56272","type":"BasicTicker"}},"id":"56271","type":"LinearAxis"},{"attributes":{},"id":"56303","type":"BasicTickFormatter"},{"attributes":{},"id":"56253","type":"ResetTool"},{"attributes":{},"id":"56336","type":"Selection"},{"attributes":{"data_source":{"id":"56308","type":"ColumnDataSource"},"glyph":{"id":"56309","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"56310","type":"Line"},"selection_glyph":null,"view":{"id":"56312","type":"CDSView"}},"id":"56311","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"56319","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"56303","type":"BasicTickFormatter"},"ticker":{"id":"56240","type":"BasicTicker"}},"id":"56239","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"56281","type":"PanTool"},{"id":"56282","type":"WheelZoomTool"},{"id":"56283","type":"BoxZoomTool"},{"id":"56284","type":"SaveTool"},{"id":"56285","type":"ResetTool"},{"id":"56286","type":"HelpTool"}]},"id":"56287","type":"Toolbar"},{"attributes":{},"id":"56252","type":"SaveTool"},{"attributes":{"source":{"id":"56308","type":"ColumnDataSource"}},"id":"56312","type":"CDSView"},{"attributes":{"text":""},"id":"56313","type":"Title"},{"attributes":{},"id":"56254","type":"HelpTool"},{"attributes":{},"id":"56286","type":"HelpTool"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[200]},"y":{"__ndarray__":"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","dtype":"float64","shape":[200]}},"selected":{"id":"56339","type":"Selection"},"selection_policy":{"id":"56338","type":"UnionRenderers"}},"id":"56308","type":"ColumnDataSource"},{"attributes":{},"id":"56317","type":"BasicTickFormatter"},{"attributes":{"label":{"value":"Gaussian"},"renderers":[{"id":"56311","type":"GlyphRenderer"}]},"id":"56321","type":"LegendItem"},{"attributes":{"dimension":1,"ticker":{"id":"56277","type":"BasicTicker"}},"id":"56280","type":"Grid"},{"attributes":{"bottom":{"value":0},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"left":{"field":"left"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"top":{"field":"top"}},"id":"56296","type":"Quad"},{"attributes":{},"id":"56269","type":"LinearScale"},{"attributes":{"label":{"value":"Poisson"},"renderers":[{"id":"56297","type":"GlyphRenderer"}]},"id":"56307","type":"LegendItem"},{"attributes":{},"id":"56281","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"56249","type":"PanTool"},{"id":"56250","type":"WheelZoomTool"},{"id":"56251","type":"BoxZoomTool"},{"id":"56252","type":"SaveTool"},{"id":"56253","type":"ResetTool"},{"id":"56254","type":"HelpTool"}]},"id":"56255","type":"Toolbar"},{"attributes":{},"id":"56250","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"56231","type":"DataRange1d"},{"attributes":{"formatter":{"id":"56301","type":"BasicTickFormatter"},"ticker":{"id":"56245","type":"BasicTicker"}},"id":"56244","type":"LinearAxis"},{"attributes":{"overlay":{"id":"56305","type":"BoxAnnotation"}},"id":"56251","type":"BoxZoomTool"},{"attributes":{"children":[{"id":"56230","subtype":"Figure","type":"Plot"},{"id":"56262","subtype":"Figure","type":"Plot"}]},"id":"56322","type":"Row"},{"attributes":{},"id":"56282","type":"WheelZoomTool"},{"attributes":{},"id":"56285","type":"ResetTool"},{"attributes":{"callback":null},"id":"56233","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"56305","type":"BoxAnnotation"},{"attributes":{},"id":"56284","type":"SaveTool"},{"attributes":{"dimension":1,"ticker":{"id":"56245","type":"BasicTicker"}},"id":"56248","type":"Grid"},{"attributes":{},"id":"56272","type":"BasicTicker"},{"attributes":{},"id":"56339","type":"Selection"},{"attributes":{"ticker":{"id":"56272","type":"BasicTicker"}},"id":"56275","type":"Grid"},{"attributes":{"bottom":{"value":0},"fill_color":{"value":"black"},"left":{"field":"left"},"right":{"field":"right"},"top":{"field":"top"}},"id":"56295","type":"Quad"},{"attributes":{"items":[{"id":"56321","type":"LegendItem"}]},"id":"56320","type":"Legend"},{"attributes":{},"id":"56249","type":"PanTool"},{"attributes":{"callback":null,"data":{"left":[0,1,2,3,4,5,6,7,8,9,10,11,12],"right":[1,2,3,4,5,6,7,8,9,10,11,12,13],"top":{"__ndarray__":"O99PjZdukj+LbOf7qfGyP5MYBFYOLcI/Di2yne+nxj81XrpJDALLP9NNYhBYOcQ/aJHtfD81vj8pXI/C9SisPzm0yHa+n5o/+n5qvHSTiD/8qfHSTWKAPwAAAAAAAAAA/Knx0k1iUD8=","dtype":"float64","shape":[13]}},"selected":{"id":"56336","type":"Selection"},"selection_policy":{"id":"56335","type":"UnionRenderers"}},"id":"56294","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"56319","type":"BoxAnnotation"}},"id":"56283","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"56239","type":"LinearAxis"}],"center":[{"id":"56243","type":"Grid"},{"id":"56248","type":"Grid"},{"id":"56306","type":"Legend"}],"left":[{"id":"56244","type":"LinearAxis"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"56297","type":"GlyphRenderer"}],"title":{"id":"56299","type":"Title"},"toolbar":{"id":"56255","type":"Toolbar"},"x_range":{"id":"56231","type":"DataRange1d"},"x_scale":{"id":"56235","type":"LinearScale"},"y_range":{"id":"56233","type":"DataRange1d"},"y_scale":{"id":"56237","type":"LinearScale"}},"id":"56230","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"56267","type":"LinearScale"},{"attributes":{"data_source":{"id":"56294","type":"ColumnDataSource"},"glyph":{"id":"56295","type":"Quad"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"56296","type":"Quad"},"selection_glyph":null,"view":{"id":"56298","type":"CDSView"}},"id":"56297","type":"GlyphRenderer"}],"root_ids":["56322"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"16c30173-bad2-4e8e-87ef-5125af3307aa","roots":{"56322":"21b1e274-8365-4f11-83a4-07d81ec0ca55"}}];
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