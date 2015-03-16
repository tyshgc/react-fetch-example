// : Modal Wrapper - モーダルコンポーネント
/* : How to use
  <Modal>
    <section>
      Modal Content
    </section>
  </Modal>
*/

var React = require("react");

var Modal = React.createClass({
  getDefaultProps : function(){
    return {
      is_toggle : false
    };
  },
  
  render : function(){
    var isToggle = this.props.is_toggle;
    
    return (
      <aside className="Component_modal">
        {isToggle &&
          <div className="layout_modal">
            <h1>Modalさん</h1>
            <i className="modal_overlay" />
            <div className="modal_body">
              {this.props.children}
            </div>
          </div>
        }
      </aside>
    );
  }
});

module.exports = Modal;