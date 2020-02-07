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
      };var element = document.getElementById("dd6935a5-6307-4812-9af3-ee78a967b833");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'dd6935a5-6307-4812-9af3-ee78a967b833' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"6d4ab38c-d279-44b6-ac96-f01547e11d98":{"roots":{"references":[{"attributes":{"ticker":{"id":"57024","type":"BasicTicker"}},"id":"57027","type":"Grid"},{"attributes":{},"id":"57039","type":"RedoTool"},{"attributes":{"overlay":{"id":"57069","type":"BoxAnnotation"}},"id":"57034","type":"BoxZoomTool"},{"attributes":{"callback":null,"overlay":{"id":"57071","type":"PolyAnnotation"}},"id":"57037","type":"LassoSelectTool"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"57065","type":"BasicTickFormatter"},"ticker":{"id":"57024","type":"BasicTicker"}},"id":"57023","type":"LinearAxis"},{"attributes":{},"id":"57024","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"57055","type":"Circle"},{"attributes":{"below":[{"id":"57023","type":"LinearAxis"}],"center":[{"id":"57027","type":"Grid"},{"id":"57032","type":"Grid"}],"left":[{"id":"57028","type":"LinearAxis"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"57057","type":"GlyphRenderer"},{"id":"57059","type":"Span"}],"title":{"id":"57060","type":"Title"},"toolbar":{"id":"57043","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"57015","type":"DataRange1d"},"x_scale":{"id":"57019","type":"LinearScale"},"y_range":{"id":"57017","type":"DataRange1d"},"y_scale":{"id":"57021","type":"LinearScale"}},"id":"57014","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"57063","type":"BasicTickFormatter"},{"attributes":{},"id":"57040","type":"ResetTool"},{"attributes":{},"id":"57067","type":"UnionRenderers"},{"attributes":{"toolbar":{"id":"57074","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"57075","type":"ToolbarBox"},{"attributes":{"text":"sigma_y"},"id":"57060","type":"Title"},{"attributes":{},"id":"57068","type":"Selection"},{"attributes":{"source":{"id":"57054","type":"ColumnDataSource"}},"id":"57058","type":"CDSView"},{"attributes":{"dimension":1,"ticker":{"id":"57029","type":"BasicTicker"}},"id":"57032","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"57056","type":"Circle"},{"attributes":{"callback":null},"id":"57015","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"57070","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"57071","type":"PolyAnnotation"},{"attributes":{"callback":null},"id":"57042","type":"HoverTool"},{"attributes":{"data_source":{"id":"57054","type":"ColumnDataSource"},"glyph":{"id":"57055","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"57056","type":"Circle"},"selection_glyph":null,"view":{"id":"57058","type":"CDSView"}},"id":"57057","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"57017","type":"DataRange1d"},{"attributes":{"callback":null,"overlay":{"id":"57070","type":"BoxAnnotation"}},"id":"57036","type":"BoxSelectTool"},{"attributes":{},"id":"57019","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"57069","type":"BoxAnnotation"},{"attributes":{},"id":"57065","type":"BasicTickFormatter"},{"attributes":{"children":[[{"id":"57014","subtype":"Figure","type":"Plot"},0,0]]},"id":"57073","type":"GridBox"},{"attributes":{"children":[{"id":"57075","type":"ToolbarBox"},{"id":"57073","type":"GridBox"}]},"id":"57076","type":"Column"},{"attributes":{},"id":"57041","type":"SaveTool"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"AmD6jcFOjEBQTl2raYiTQBDjz+4U2pNAZGseedHplEB/WvEazoSWQOHtizqLkJlAAkPUheO2mUBesx6n5kCZQLJxAzcYzZhAMUpMiFv0mUC/Oi/BFYGZQN5lChPFDZZAFw600+IXlUB7koIfjHaVQLrzDUmEzZRA0nSsVmc2lUBXi/wUTAaRQBZhtQ+zqpBAXkjEt6PHjECNgYxaPa6QQA==","dtype":"float64","shape":[20]}},"selected":{"id":"57068","type":"Selection"},"selection_policy":{"id":"57067","type":"UnionRenderers"}},"id":"57054","type":"ColumnDataSource"},{"attributes":{},"id":"57035","type":"WheelZoomTool"},{"attributes":{"axis_label":"ESS for quantiles","formatter":{"id":"57063","type":"BasicTickFormatter"},"ticker":{"id":"57029","type":"BasicTicker"}},"id":"57028","type":"LinearAxis"},{"attributes":{},"id":"57038","type":"UndoTool"},{"attributes":{},"id":"57033","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"57033","type":"PanTool"},{"id":"57034","type":"BoxZoomTool"},{"id":"57035","type":"WheelZoomTool"},{"id":"57036","type":"BoxSelectTool"},{"id":"57037","type":"LassoSelectTool"},{"id":"57038","type":"UndoTool"},{"id":"57039","type":"RedoTool"},{"id":"57040","type":"ResetTool"},{"id":"57041","type":"SaveTool"},{"id":"57042","type":"HoverTool"}]},"id":"57043","type":"Toolbar"},{"attributes":{"line_color":{"value":"red"},"line_dash":[6],"line_width":{"value":3},"location":400},"id":"57059","type":"Span"},{"attributes":{"tools":[{"id":"57033","type":"PanTool"},{"id":"57034","type":"BoxZoomTool"},{"id":"57035","type":"WheelZoomTool"},{"id":"57036","type":"BoxSelectTool"},{"id":"57037","type":"LassoSelectTool"},{"id":"57038","type":"UndoTool"},{"id":"57039","type":"RedoTool"},{"id":"57040","type":"ResetTool"},{"id":"57041","type":"SaveTool"},{"id":"57042","type":"HoverTool"}]},"id":"57074","type":"ProxyToolbar"},{"attributes":{},"id":"57021","type":"LinearScale"},{"attributes":{},"id":"57029","type":"BasicTicker"}],"root_ids":["57076"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"6d4ab38c-d279-44b6-ac96-f01547e11d98","roots":{"57076":"dd6935a5-6307-4812-9af3-ee78a967b833"}}];
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