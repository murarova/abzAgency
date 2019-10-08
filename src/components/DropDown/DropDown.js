import React from 'react';
import { connect } from 'react-redux';
import styles from './DropDown.module.css';
import { dropDownToggle } from '../../redux/actions/dropDownActions';

const DropDown = ({ isOpen, handleToggle }) => {
    return (
        <div className={styles.container}>
            <button
                type="button"
                className={styles.button}
                onClick={() => handleToggle()}
            >
                &#9776;
            </button>

            {isOpen && (
                <div className={styles.dropdown}>
                    <ul className={styles.menu}>
                        <li>Option 1</li>
                        <li>Option 2</li>
                        <li>Option 3</li>
                        <li>Option 4</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

const mapStateToProps = state => ({
    isOpen: state.dropDown,
});

const mapDispatchToProps = dispatch => ({
    handleToggle: () => dispatch(dropDownToggle()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(DropDown);
