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
      };var element = document.getElementById("2446e1d1-33fc-4858-995e-c05570661778");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '2446e1d1-33fc-4858-995e-c05570661778' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"97e8a307-2f08-4e4c-a5ac-1a841dbc9d57":{"roots":{"references":[{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"56732","type":"Circle"},{"attributes":{"data_source":{"id":"56754","type":"ColumnDataSource"},"glyph":{"id":"56755","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"56756","type":"Line"},"selection_glyph":null,"view":{"id":"56758","type":"CDSView"}},"id":"56757","type":"GlyphRenderer"},{"attributes":{},"id":"56767","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"56733","type":"Circle"},{"attributes":{},"id":"56706","type":"BasicTicker"},{"attributes":{"source":{"id":"56754","type":"ColumnDataSource"}},"id":"56758","type":"CDSView"},{"attributes":{"callback":null},"id":"56692","type":"DataRange1d"},{"attributes":{"below":[{"id":"56700","type":"LinearAxis"}],"center":[{"id":"56704","type":"Grid"},{"id":"56709","type":"Grid"},{"id":"56752","type":"Legend"}],"left":[{"id":"56705","type":"LinearAxis"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"56734","type":"GlyphRenderer"},{"id":"56739","type":"GlyphRenderer"},{"id":"56757","type":"GlyphRenderer"},{"id":"56776","type":"GlyphRenderer"},{"id":"56778","type":"Span"}],"title":{"id":"56779","type":"Title"},"toolbar":{"id":"56720","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"56692","type":"DataRange1d"},"x_scale":{"id":"56696","type":"LinearScale"},"y_range":{"id":"56694","type":"DataRange1d"},"y_scale":{"id":"56698","type":"LinearScale"}},"id":"56691","subtype":"Figure","type":"Plot"},{"attributes":{"label":{"value":"bulk"},"renderers":[{"id":"56739","type":"GlyphRenderer"}]},"id":"56753","type":"LegendItem"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"56756","type":"Line"},{"attributes":{"axis_label":"ESS","formatter":{"id":"56743","type":"BasicTickFormatter"},"ticker":{"id":"56706","type":"BasicTicker"}},"id":"56705","type":"LinearAxis"},{"attributes":{},"id":"56712","type":"WheelZoomTool"},{"attributes":{"dimension":1,"ticker":{"id":"56706","type":"BasicTicker"}},"id":"56709","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"56750","type":"BoxAnnotation"},{"attributes":{"label":{"value":"tail"},"renderers":[{"id":"56757","type":"GlyphRenderer"}]},"id":"56772","type":"LegendItem"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"56751","type":"PolyAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"56775","type":"Circle"},{"attributes":{},"id":"56717","type":"ResetTool"},{"attributes":{"text":"b"},"id":"56779","type":"Title"},{"attributes":{"callback":null,"overlay":{"id":"56751","type":"PolyAnnotation"}},"id":"56714","type":"LassoSelectTool"},{"attributes":{},"id":"56701","type":"BasicTicker"},{"attributes":{},"id":"56698","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"efl4S7K5UECliF2aYsBdQM+3s3hpAWhA30PsAOxbckA9j+MdBmV5QCjkO/TQqHpAlo8qDuxxfUBhgLuJn9GBQDEicW5nj4VAmAm8VupRhkAL06Ie5C6GQBjMN1TJ+olARw25XLj/ikAxQOYiRzCOQGk5Bqm0MJBA5vBmnUCPkEAAWgBDqmmSQHF+IQeXypNAO/uxzEAolEDsjMUYoPKUQA==","dtype":"float64","shape":[20]}},"selected":{"id":"56791","type":"Selection"},"selection_policy":{"id":"56790","type":"UnionRenderers"}},"id":"56754","type":"ColumnDataSource"},{"attributes":{"children":[[{"id":"56691","subtype":"Figure","type":"Plot"},0,0]]},"id":"56798","type":"GridBox"},{"attributes":{},"id":"56743","type":"BasicTickFormatter"},{"attributes":{},"id":"56768","type":"Selection"},{"attributes":{"ticker":{"id":"56701","type":"BasicTicker"}},"id":"56704","type":"Grid"},{"attributes":{"data_source":{"id":"56736","type":"ColumnDataSource"},"glyph":{"id":"56737","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"56738","type":"Line"},"selection_glyph":null,"view":{"id":"56740","type":"CDSView"}},"id":"56739","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"56731","type":"ColumnDataSource"},"glyph":{"id":"56732","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"56733","type":"Circle"},"selection_glyph":null,"view":{"id":"56735","type":"CDSView"}},"id":"56734","type":"GlyphRenderer"},{"attributes":{"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"56755","type":"Line"},{"attributes":{"callback":null},"id":"56694","type":"DataRange1d"},{"attributes":{"source":{"id":"56736","type":"ColumnDataSource"}},"id":"56740","type":"CDSView"},{"attributes":{},"id":"56745","type":"BasicTickFormatter"},{"attributes":{"callback":null,"overlay":{"id":"56750","type":"BoxAnnotation"}},"id":"56713","type":"BoxSelectTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"56738","type":"Line"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"56710","type":"PanTool"},{"id":"56711","type":"BoxZoomTool"},{"id":"56712","type":"WheelZoomTool"},{"id":"56713","type":"BoxSelectTool"},{"id":"56714","type":"LassoSelectTool"},{"id":"56715","type":"UndoTool"},{"id":"56716","type":"RedoTool"},{"id":"56717","type":"ResetTool"},{"id":"56718","type":"SaveTool"},{"id":"56719","type":"HoverTool"}]},"id":"56720","type":"Toolbar"},{"attributes":{},"id":"56715","type":"UndoTool"},{"attributes":{"data_source":{"id":"56773","type":"ColumnDataSource"},"glyph":{"id":"56774","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"56775","type":"Circle"},"selection_glyph":null,"view":{"id":"56777","type":"CDSView"}},"id":"56776","type":"GlyphRenderer"},{"attributes":{},"id":"56716","type":"RedoTool"},{"attributes":{"toolbar":{"id":"56799","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"56800","type":"ToolbarBox"},{"attributes":{"children":[{"id":"56800","type":"ToolbarBox"},{"id":"56798","type":"GridBox"}]},"id":"56801","type":"Column"},{"attributes":{"axis_label":"Total number of draws","formatter":{"id":"56745","type":"BasicTickFormatter"},"ticker":{"id":"56701","type":"BasicTicker"}},"id":"56700","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"56749","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"56749","type":"BoxAnnotation"}},"id":"56711","type":"BoxZoomTool"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"56737","type":"Line"},{"attributes":{"tools":[{"id":"56710","type":"PanTool"},{"id":"56711","type":"BoxZoomTool"},{"id":"56712","type":"WheelZoomTool"},{"id":"56713","type":"BoxSelectTool"},{"id":"56714","type":"LassoSelectTool"},{"id":"56715","type":"UndoTool"},{"id":"56716","type":"RedoTool"},{"id":"56717","type":"ResetTool"},{"id":"56718","type":"SaveTool"},{"id":"56719","type":"HoverTool"}]},"id":"56799","type":"ProxyToolbar"},{"attributes":{},"id":"56748","type":"Selection"},{"attributes":{},"id":"56696","type":"LinearScale"},{"attributes":{},"id":"56793","type":"Selection"},{"attributes":{"items":[{"id":"56753","type":"LegendItem"},{"id":"56772","type":"LegendItem"}]},"id":"56752","type":"Legend"},{"attributes":{"line_color":{"value":"red"},"line_dash":[6],"line_width":{"value":3},"location":400},"id":"56778","type":"Span"},{"attributes":{},"id":"56792","type":"UnionRenderers"},{"attributes":{},"id":"56747","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"56719","type":"HoverTool"},{"attributes":{},"id":"56790","type":"UnionRenderers"},{"attributes":{"source":{"id":"56731","type":"ColumnDataSource"}},"id":"56735","type":"CDSView"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"56774","type":"Circle"},{"attributes":{},"id":"56718","type":"SaveTool"},{"attributes":{"source":{"id":"56773","type":"ColumnDataSource"}},"id":"56777","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"96FbKLyBMkDEFAnglsNWQBC5N3NCBm1AhSuZf4dmdECKE1YWcHt0QBw2aMPTi3lAiOdK+uWaeUAGhRKd9gZ9QNX3uUqhqIFAnLXIDxQMhUCr7PKl8U6JQLaUOqun4o1AoNLS679XkECU4/KXSGmSQCcpnoFLL5RACq31A5f5lUCcLj2ibHeWQF4U4M8TD5hAMc5SiTsFmkArYzxHIfWcQA==","dtype":"float64","shape":[20]}},"selected":{"id":"56768","type":"Selection"},"selection_policy":{"id":"56767","type":"UnionRenderers"}},"id":"56736","type":"ColumnDataSource"},{"attributes":{},"id":"56710","type":"PanTool"},{"attributes":{},"id":"56791","type":"Selection"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"96FbKLyBMkDEFAnglsNWQBC5N3NCBm1AhSuZf4dmdECKE1YWcHt0QBw2aMPTi3lAiOdK+uWaeUAGhRKd9gZ9QNX3uUqhqIFAnLXIDxQMhUCr7PKl8U6JQLaUOqun4o1AoNLS679XkECU4/KXSGmSQCcpnoFLL5RACq31A5f5lUCcLj2ibHeWQF4U4M8TD5hAMc5SiTsFmkArYzxHIfWcQA==","dtype":"float64","shape":[20]}},"selected":{"id":"56748","type":"Selection"},"selection_policy":{"id":"56747","type":"UnionRenderers"}},"id":"56731","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"efl4S7K5UECliF2aYsBdQM+3s3hpAWhA30PsAOxbckA9j+MdBmV5QCjkO/TQqHpAlo8qDuxxfUBhgLuJn9GBQDEicW5nj4VAmAm8VupRhkAL06Ie5C6GQBjMN1TJ+olARw25XLj/ikAxQOYiRzCOQGk5Bqm0MJBA5vBmnUCPkEAAWgBDqmmSQHF+IQeXypNAO/uxzEAolEDsjMUYoPKUQA==","dtype":"float64","shape":[20]}},"selected":{"id":"56793","type":"Selection"},"selection_policy":{"id":"56792","type":"UnionRenderers"}},"id":"56773","type":"ColumnDataSource"}],"root_ids":["56801"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"97e8a307-2f08-4e4c-a5ac-1a841dbc9d57","roots":{"56801":"2446e1d1-33fc-4858-995e-c05570661778"}}];
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