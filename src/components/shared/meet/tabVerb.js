



const TabVerb = ({ setTypeMeet }) => {
    return (
        <div class="container-xxl flex-grow-1 container-p-y">
            <div class="layout-demo-wrapper">
                <div class="layout-demo-placeholder">
                    <img src="../../assets/img/layouts/layout-without-menu-light.png" class="img-fluid" alt="Layout without menu" data-app-light-img="layouts/layout-without-menu-light.png" data-app-dark-img="layouts/layout-without-menu-dark.png" />
                </div>
                <div class="layout-demo-info">
                    <h4 class="secondary-font">به زودی این بخش اضافه میشود</h4>
                    <button class="btn btn-secondary" onClick={() => setTypeMeet("selectType")}>بازگشت</button>
                </div>
            </div>
        </div>
    );
}

export default TabVerb;