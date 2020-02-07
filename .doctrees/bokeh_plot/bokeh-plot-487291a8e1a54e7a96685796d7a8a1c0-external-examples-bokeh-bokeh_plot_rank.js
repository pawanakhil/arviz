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
      };var element = document.getElementById("efb7d7e7-6f74-43ff-9a91-a6739d1435d1");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'efb7d7e7-6f74-43ff-9a91-a6739d1435d1' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"3089c295-3f5b-4212-80ed-2e77cb6bf9d8":{"roots":{"references":[{"attributes":{"text":"tau"},"id":"78990","type":"Title"},{"attributes":{"tools":[{"id":"78905","type":"PanTool"},{"id":"78906","type":"BoxZoomTool"},{"id":"78907","type":"WheelZoomTool"},{"id":"78908","type":"BoxSelectTool"},{"id":"78909","type":"LassoSelectTool"},{"id":"78910","type":"UndoTool"},{"id":"78911","type":"RedoTool"},{"id":"78912","type":"ResetTool"},{"id":"78913","type":"SaveTool"},{"id":"78914","type":"HoverTool"},{"id":"78943","type":"PanTool"},{"id":"78944","type":"BoxZoomTool"},{"id":"78945","type":"WheelZoomTool"},{"id":"78946","type":"BoxSelectTool"},{"id":"78947","type":"LassoSelectTool"},{"id":"78948","type":"UndoTool"},{"id":"78949","type":"RedoTool"},{"id":"78950","type":"ResetTool"},{"id":"78951","type":"SaveTool"},{"id":"78952","type":"HoverTool"}]},"id":"79053","type":"ProxyToolbar"},{"attributes":{},"id":"79022","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"78914","type":"HoverTool"},{"attributes":{"data_source":{"id":"79010","type":"ColumnDataSource"},"glyph":{"id":"79011","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"79012","type":"VBar"},"selection_glyph":null,"view":{"id":"79014","type":"CDSView"}},"id":"79013","type":"GlyphRenderer"},{"attributes":{"line_dash":[6],"location":3.480769230769231},"id":"79015","type":"Span"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"78977","type":"VBar"},{"attributes":{},"id":"79021","type":"BasicTickFormatter"},{"attributes":{},"id":"78934","type":"BasicTicker"},{"attributes":{"callback":null},"id":"78952","type":"HoverTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"79048","type":"BoxAnnotation"},{"attributes":{"ticker":{"id":"78934","type":"BasicTicker"}},"id":"78937","type":"Grid"},{"attributes":{"source":{"id":"79010","type":"ColumnDataSource"}},"id":"79014","type":"CDSView"},{"attributes":{},"id":"79045","type":"Selection"},{"attributes":{"line_dash":[6],"location":3.4166666666666665},"id":"78987","type":"Span"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"79029","type":"Selection"},"selection_policy":{"id":"79028","type":"UnionRenderers"}},"id":"78976","type":"ColumnDataSource"},{"attributes":{},"id":"79031","type":"Selection"},{"attributes":{"source":{"id":"78982","type":"ColumnDataSource"}},"id":"78986","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"79049","type":"BoxAnnotation"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"79038","type":"BasicTickFormatter"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"ticker":{"id":"78934","type":"BasicTicker"}},"id":"78933","type":"LinearAxis"},{"attributes":{},"id":"79030","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"78887","type":"DataRange1d"},{"attributes":{},"id":"79025","type":"Selection"},{"attributes":{},"id":"78950","type":"ResetTool"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"78978","type":"VBar"},{"attributes":{},"id":"79026","type":"UnionRenderers"},{"attributes":{},"id":"78951","type":"SaveTool"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"78993","type":"VBar"},{"attributes":{},"id":"79027","type":"Selection"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"79000","type":"VBar"},{"attributes":{},"id":"78948","type":"UndoTool"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"79012","type":"VBar"},{"attributes":{},"id":"79028","type":"UnionRenderers"},{"attributes":{},"id":"78949","type":"RedoTool"},{"attributes":{"line_dash":[6],"location":1.4166666666666665},"id":"78975","type":"Span"},{"attributes":{},"id":"79029","type":"Selection"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"79047","type":"Selection"},"selection_policy":{"id":"79046","type":"UnionRenderers"}},"id":"79010","type":"ColumnDataSource"},{"attributes":{},"id":"79024","type":"UnionRenderers"},{"attributes":{"ticker":{"id":"78896","type":"BasicTicker"}},"id":"78899","type":"Grid"},{"attributes":{"below":[{"id":"78895","type":"LinearAxis"}],"center":[{"id":"78899","type":"Grid"},{"id":"78904","type":"Grid"},{"id":"78969","type":"Span"},{"id":"78975","type":"Span"},{"id":"78981","type":"Span"},{"id":"78987","type":"Span"}],"left":[{"id":"78900","type":"LinearAxis"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"78967","type":"GlyphRenderer"},{"id":"78973","type":"GlyphRenderer"},{"id":"78979","type":"GlyphRenderer"},{"id":"78985","type":"GlyphRenderer"}],"title":{"id":"78990","type":"Title"},"toolbar":{"id":"78915","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"78887","type":"DataRange1d"},"x_scale":{"id":"78891","type":"LinearScale"},"y_range":{"id":"78889","type":"DataRange1d"},"y_scale":{"id":"78893","type":"LinearScale"}},"id":"78886","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"79041","type":"Selection"},"selection_policy":{"id":"79040","type":"UnionRenderers"}},"id":"78992","type":"ColumnDataSource"},{"attributes":{"callback":null,"overlay":{"id":"79049","type":"BoxAnnotation"}},"id":"78946","type":"BoxSelectTool"},{"attributes":{"line_dash":[6],"location":1.4807692307692308},"id":"79003","type":"Span"},{"attributes":{},"id":"78945","type":"WheelZoomTool"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"79043","type":"Selection"},"selection_policy":{"id":"79042","type":"UnionRenderers"}},"id":"78998","type":"ColumnDataSource"},{"attributes":{"source":{"id":"78970","type":"ColumnDataSource"}},"id":"78974","type":"CDSView"},{"attributes":{},"id":"78913","type":"SaveTool"},{"attributes":{"callback":null,"overlay":{"id":"79050","type":"PolyAnnotation"}},"id":"78947","type":"LassoSelectTool"},{"attributes":{},"id":"78912","type":"ResetTool"},{"attributes":{"overlay":{"id":"79048","type":"BoxAnnotation"}},"id":"78944","type":"BoxZoomTool"},{"attributes":{},"id":"79037","type":"BasicTickFormatter"},{"attributes":{"callback":null,"overlay":{"id":"79034","type":"PolyAnnotation"}},"id":"78909","type":"LassoSelectTool"},{"attributes":{},"id":"78911","type":"RedoTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"78966","type":"VBar"},{"attributes":{},"id":"78943","type":"PanTool"},{"attributes":{"data_source":{"id":"78982","type":"ColumnDataSource"},"glyph":{"id":"78983","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"78984","type":"VBar"},"selection_glyph":null,"view":{"id":"78986","type":"CDSView"}},"id":"78985","type":"GlyphRenderer"},{"attributes":{"ticks":[0,1,2,3]},"id":"79016","type":"FixedTicker"},{"attributes":{},"id":"78910","type":"UndoTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"79034","type":"PolyAnnotation"},{"attributes":{"data_source":{"id":"78970","type":"ColumnDataSource"},"glyph":{"id":"78971","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"78972","type":"VBar"},"selection_glyph":null,"view":{"id":"78974","type":"CDSView"}},"id":"78973","type":"GlyphRenderer"},{"attributes":{},"id":"79046","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"79025","type":"Selection"},"selection_policy":{"id":"79024","type":"UnionRenderers"}},"id":"78964","type":"ColumnDataSource"},{"attributes":{},"id":"78907","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"78998","type":"ColumnDataSource"},"glyph":{"id":"78999","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"79000","type":"VBar"},"selection_glyph":null,"view":{"id":"79002","type":"CDSView"}},"id":"79001","type":"GlyphRenderer"},{"attributes":{},"id":"79040","type":"UnionRenderers"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"78972","type":"VBar"},{"attributes":{},"id":"79041","type":"Selection"},{"attributes":{"children":[[{"id":"78886","subtype":"Figure","type":"Plot"},0,0],[{"id":"78926","subtype":"Figure","type":"Plot"},0,1]]},"id":"79052","type":"GridBox"},{"attributes":{},"id":"79043","type":"Selection"},{"attributes":{"callback":null,"overlay":{"id":"79033","type":"BoxAnnotation"}},"id":"78908","type":"BoxSelectTool"},{"attributes":{"dimension":1,"ticker":{"id":"78939","type":"BasicTicker"}},"id":"78942","type":"Grid"},{"attributes":{},"id":"79042","type":"UnionRenderers"},{"attributes":{"ticks":[0,1,2,3]},"id":"78988","type":"FixedTicker"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"78971","type":"VBar"},{"attributes":{"overlay":{"id":"79032","type":"BoxAnnotation"}},"id":"78906","type":"BoxZoomTool"},{"attributes":{"toolbar":{"id":"79053","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"79054","type":"ToolbarBox"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"78984","type":"VBar"},{"attributes":{},"id":"79044","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"78943","type":"PanTool"},{"id":"78944","type":"BoxZoomTool"},{"id":"78945","type":"WheelZoomTool"},{"id":"78946","type":"BoxSelectTool"},{"id":"78947","type":"LassoSelectTool"},{"id":"78948","type":"UndoTool"},{"id":"78949","type":"RedoTool"},{"id":"78950","type":"ResetTool"},{"id":"78951","type":"SaveTool"},{"id":"78952","type":"HoverTool"}]},"id":"78953","type":"Toolbar"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"79045","type":"Selection"},"selection_policy":{"id":"79044","type":"UnionRenderers"}},"id":"79004","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"78964","type":"ColumnDataSource"},"glyph":{"id":"78965","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"78966","type":"VBar"},"selection_glyph":null,"view":{"id":"78968","type":"CDSView"}},"id":"78967","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"79027","type":"Selection"},"selection_policy":{"id":"79026","type":"UnionRenderers"}},"id":"78970","type":"ColumnDataSource"},{"attributes":{},"id":"79047","type":"Selection"},{"attributes":{},"id":"78905","type":"PanTool"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"78965","type":"VBar"},{"attributes":{"source":{"id":"78998","type":"ColumnDataSource"}},"id":"79002","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"78905","type":"PanTool"},{"id":"78906","type":"BoxZoomTool"},{"id":"78907","type":"WheelZoomTool"},{"id":"78908","type":"BoxSelectTool"},{"id":"78909","type":"LassoSelectTool"},{"id":"78910","type":"UndoTool"},{"id":"78911","type":"RedoTool"},{"id":"78912","type":"ResetTool"},{"id":"78913","type":"SaveTool"},{"id":"78914","type":"HoverTool"}]},"id":"78915","type":"Toolbar"},{"attributes":{"line_dash":[6],"location":0.41666666666666663},"id":"78969","type":"Span"},{"attributes":{},"id":"78939","type":"BasicTicker"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"78999","type":"VBar"},{"attributes":{"below":[{"id":"78933","type":"LinearAxis"}],"center":[{"id":"78937","type":"Grid"},{"id":"78942","type":"Grid"},{"id":"78997","type":"Span"},{"id":"79003","type":"Span"},{"id":"79009","type":"Span"},{"id":"79015","type":"Span"}],"left":[{"id":"78938","type":"LinearAxis"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"78995","type":"GlyphRenderer"},{"id":"79001","type":"GlyphRenderer"},{"id":"79007","type":"GlyphRenderer"},{"id":"79013","type":"GlyphRenderer"}],"title":{"id":"79018","type":"Title"},"toolbar":{"id":"78953","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"78887","type":"DataRange1d"},"x_scale":{"id":"78929","type":"LinearScale"},"y_range":{"id":"78889","type":"DataRange1d"},"y_scale":{"id":"78931","type":"LinearScale"}},"id":"78926","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"78976","type":"ColumnDataSource"},"glyph":{"id":"78977","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"78978","type":"VBar"},"selection_glyph":null,"view":{"id":"78980","type":"CDSView"}},"id":"78979","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"79033","type":"BoxAnnotation"},{"attributes":{},"id":"78929","type":"LinearScale"},{"attributes":{"children":[{"id":"79054","type":"ToolbarBox"},{"id":"79052","type":"GridBox"}]},"id":"79055","type":"Column"},{"attributes":{"text":"mu"},"id":"79018","type":"Title"},{"attributes":{},"id":"78931","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"79050","type":"PolyAnnotation"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"79011","type":"VBar"},{"attributes":{"dimension":1,"ticker":{"id":"78901","type":"BasicTicker"}},"id":"78904","type":"Grid"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"79005","type":"VBar"},{"attributes":{"source":{"id":"78964","type":"ColumnDataSource"}},"id":"78968","type":"CDSView"},{"attributes":{"axis_label":"Chain","formatter":{"id":"79021","type":"BasicTickFormatter"},"ticker":{"id":"78988","type":"FixedTicker"}},"id":"78900","type":"LinearAxis"},{"attributes":{"source":{"id":"79004","type":"ColumnDataSource"}},"id":"79008","type":"CDSView"},{"attributes":{},"id":"78891","type":"LinearScale"},{"attributes":{"line_dash":[6],"location":2.480769230769231},"id":"79009","type":"Span"},{"attributes":{"line_dash":[6],"location":0.48076923076923067},"id":"78997","type":"Span"},{"attributes":{},"id":"78901","type":"BasicTicker"},{"attributes":{"source":{"id":"78976","type":"ColumnDataSource"}},"id":"78980","type":"CDSView"},{"attributes":{"data_source":{"id":"79004","type":"ColumnDataSource"},"glyph":{"id":"79005","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"79006","type":"VBar"},"selection_glyph":null,"view":{"id":"79008","type":"CDSView"}},"id":"79007","type":"GlyphRenderer"},{"attributes":{},"id":"78896","type":"BasicTicker"},{"attributes":{"line_dash":[6],"location":2.4166666666666665},"id":"78981","type":"Span"},{"attributes":{"callback":null},"id":"78889","type":"DataRange1d"},{"attributes":{"axis_label":"Chain","formatter":{"id":"79037","type":"BasicTickFormatter"},"ticker":{"id":"79016","type":"FixedTicker"}},"id":"78938","type":"LinearAxis"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"78983","type":"VBar"},{"attributes":{},"id":"79038","type":"BasicTickFormatter"},{"attributes":{},"id":"78893","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"79032","type":"BoxAnnotation"},{"attributes":{"source":{"id":"78992","type":"ColumnDataSource"}},"id":"78996","type":"CDSView"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"79006","type":"VBar"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"79022","type":"BasicTickFormatter"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"ticker":{"id":"78896","type":"BasicTicker"}},"id":"78895","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"79031","type":"Selection"},"selection_policy":{"id":"79030","type":"UnionRenderers"}},"id":"78982","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"78994","type":"VBar"},{"attributes":{"data_source":{"id":"78992","type":"ColumnDataSource"},"glyph":{"id":"78993","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"78994","type":"VBar"},"selection_glyph":null,"view":{"id":"78996","type":"CDSView"}},"id":"78995","type":"GlyphRenderer"}],"root_ids":["79055"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"3089c295-3f5b-4212-80ed-2e77cb6bf9d8","roots":{"79055":"efb7d7e7-6f74-43ff-9a91-a6739d1435d1"}}];
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