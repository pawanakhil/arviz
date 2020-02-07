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
      };var element = document.getElementById("f06cb777-69a5-4d06-b5c9-d9ca0dc6275d");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'f06cb777-69a5-4d06-b5c9-d9ca0dc6275d' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"8a1b32c5-fb57-4a60-8416-703ff3c13c63":{"roots":{"references":[{"attributes":{"callback":null,"data":{"xs":[[61.360479636844296,61.67142831044951]],"ys":[[-0.75,-0.75]]},"selected":{"id":"53977","type":"Selection"},"selection_policy":{"id":"53976","type":"UnionRenderers"}},"id":"53948","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"53985","type":"BoxAnnotation"},{"attributes":{},"id":"53974","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"53958","type":"ColumnDataSource"},"glyph":{"id":"53959","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"53960","type":"MultiLine"},"selection_glyph":null,"view":{"id":"53962","type":"CDSView"}},"id":"53961","type":"GlyphRenderer"},{"attributes":{"callback":null,"overlay":{"id":"53986","type":"PolyAnnotation"}},"id":"53924","type":"LassoSelectTool"},{"attributes":{},"id":"53925","type":"UndoTool"},{"attributes":{},"id":"53976","type":"UnionRenderers"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"53960","type":"MultiLine"},{"attributes":{},"id":"53928","type":"SaveTool"},{"attributes":{"data_source":{"id":"53963","type":"ColumnDataSource"},"glyph":{"id":"53964","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"53965","type":"Circle"},"selection_glyph":null,"view":{"id":"53967","type":"CDSView"}},"id":"53966","type":"GlyphRenderer"},{"attributes":{"ticks":[0.0,-0.75,-1.0]},"id":"53941","type":"FixedTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"53984","type":"BoxAnnotation"},{"attributes":{},"id":"53971","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":[61.29204629507727,61.5159539736469],"y":[0.0,-1.0]},"selected":{"id":"53979","type":"Selection"},"selection_policy":{"id":"53978","type":"UnionRenderers"}},"id":"53953","type":"ColumnDataSource"},{"attributes":{"axis_label":"Deviance","formatter":{"id":"53972","type":"BasicTickFormatter"},"ticker":{"id":"53911","type":"BasicTicker"}},"id":"53910","type":"LinearAxis"},{"attributes":{"source":{"id":"53963","type":"ColumnDataSource"}},"id":"53967","type":"CDSView"},{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"53949","type":"MultiLine"},{"attributes":{},"id":"53981","type":"Selection"},{"attributes":{},"id":"53927","type":"ResetTool"},{"attributes":{},"id":"53972","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":[59.6908040037226,59.712642429907305],"y":[0.0,-1.0]},"selected":{"id":"53983","type":"Selection"},"selection_policy":{"id":"53982","type":"UnionRenderers"}},"id":"53963","type":"ColumnDataSource"},{"attributes":{},"id":"53908","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"53955","type":"Circle"},{"attributes":{"callback":null,"data":{"xs":[[58.63917230621966,63.94492028393488],[58.97065477574434,64.06125317154947]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"53981","type":"Selection"},"selection_policy":{"id":"53980","type":"UnionRenderers"}},"id":"53958","type":"ColumnDataSource"},{"attributes":{"callback":null,"overlay":{"id":"53985","type":"BoxAnnotation"}},"id":"53923","type":"BoxSelectTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"53950","type":"MultiLine"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"53920","type":"PanTool"},{"id":"53921","type":"BoxZoomTool"},{"id":"53922","type":"WheelZoomTool"},{"id":"53923","type":"BoxSelectTool"},{"id":"53924","type":"LassoSelectTool"},{"id":"53925","type":"UndoTool"},{"id":"53926","type":"RedoTool"},{"id":"53927","type":"ResetTool"},{"id":"53928","type":"SaveTool"},{"id":"53929","type":"HoverTool"}]},"id":"53930","type":"Toolbar"},{"attributes":{},"id":"53978","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"53971","type":"BasicTickFormatter"},"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"ticker":{"id":"53941","type":"FixedTicker"}},"id":"53915","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"53965","type":"Circle"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"53944","type":"Triangle"},{"attributes":{},"id":"53916","type":"BasicTicker"},{"attributes":{"callback":null},"id":"53929","type":"HoverTool"},{"attributes":{},"id":"53977","type":"Selection"},{"attributes":{"callback":null},"id":"53902","type":"DataRange1d"},{"attributes":{"overlay":{"id":"53984","type":"BoxAnnotation"}},"id":"53921","type":"BoxZoomTool"},{"attributes":{},"id":"53926","type":"RedoTool"},{"attributes":{"data_source":{"id":"53948","type":"ColumnDataSource"},"glyph":{"id":"53949","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"53950","type":"MultiLine"},"selection_glyph":null,"view":{"id":"53952","type":"CDSView"}},"id":"53951","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"53953","type":"ColumnDataSource"},"glyph":{"id":"53954","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"53955","type":"Circle"},"selection_glyph":null,"view":{"id":"53957","type":"CDSView"}},"id":"53956","type":"GlyphRenderer"},{"attributes":{},"id":"53975","type":"Selection"},{"attributes":{},"id":"53980","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"x":[61.5159539736469],"y":[-0.75]},"selected":{"id":"53975","type":"Selection"},"selection_policy":{"id":"53974","type":"UnionRenderers"}},"id":"53943","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"53945","type":"Triangle"},{"attributes":{"fill_color":{"value":"black"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"53964","type":"Circle"},{"attributes":{"dimension":"height","line_color":{"value":"grey"},"line_dash":[6],"line_width":{"value":1.7677669529663689},"location":61.29204629507727},"id":"53968","type":"Span"},{"attributes":{"text":""},"id":"53969","type":"Title"},{"attributes":{},"id":"53982","type":"UnionRenderers"},{"attributes":{"callback":null,"end":0.5,"start":-1.5},"id":"53904","type":"DataRange1d"},{"attributes":{},"id":"53979","type":"Selection"},{"attributes":{},"id":"53983","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"53986","type":"PolyAnnotation"},{"attributes":{"below":[{"id":"53910","type":"LinearAxis"}],"center":[{"id":"53914","type":"Grid"},{"id":"53919","type":"Grid"}],"left":[{"id":"53915","type":"LinearAxis"}],"output_backend":"webgl","plot_height":240,"plot_width":720,"renderers":[{"id":"53946","type":"GlyphRenderer"},{"id":"53951","type":"GlyphRenderer"},{"id":"53956","type":"GlyphRenderer"},{"id":"53961","type":"GlyphRenderer"},{"id":"53966","type":"GlyphRenderer"},{"id":"53968","type":"Span"}],"title":{"id":"53969","type":"Title"},"toolbar":{"id":"53930","type":"Toolbar"},"x_range":{"id":"53902","type":"DataRange1d"},"x_scale":{"id":"53906","type":"LinearScale"},"y_range":{"id":"53904","type":"DataRange1d"},"y_scale":{"id":"53908","type":"LinearScale"}},"id":"53901","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"53922","type":"WheelZoomTool"},{"attributes":{"ticker":{"id":"53911","type":"BasicTicker"}},"id":"53914","type":"Grid"},{"attributes":{},"id":"53911","type":"BasicTicker"},{"attributes":{"dimension":1,"ticker":{"id":"53916","type":"BasicTicker"}},"id":"53919","type":"Grid"},{"attributes":{"source":{"id":"53953","type":"ColumnDataSource"}},"id":"53957","type":"CDSView"},{"attributes":{},"id":"53906","type":"LinearScale"},{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"53959","type":"MultiLine"},{"attributes":{},"id":"53920","type":"PanTool"},{"attributes":{"source":{"id":"53943","type":"ColumnDataSource"}},"id":"53947","type":"CDSView"},{"attributes":{"data_source":{"id":"53943","type":"ColumnDataSource"},"glyph":{"id":"53944","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"53945","type":"Triangle"},"selection_glyph":null,"view":{"id":"53947","type":"CDSView"}},"id":"53946","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"53954","type":"Circle"},{"attributes":{"source":{"id":"53948","type":"ColumnDataSource"}},"id":"53952","type":"CDSView"},{"attributes":{"source":{"id":"53958","type":"ColumnDataSource"}},"id":"53962","type":"CDSView"}],"root_ids":["53901"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"8a1b32c5-fb57-4a60-8416-703ff3c13c63","roots":{"53901":"f06cb777-69a5-4d06-b5c9-d9ca0dc6275d"}}];
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