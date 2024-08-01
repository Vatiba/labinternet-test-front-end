import React, { CSSProperties, useEffect } from 'react';
import ReactDOM from 'react-dom';

// styles
import clsx from 'clsx';
import styles from './Drawer.module.scss';


type DrawerProps = {
	children: React.ReactNode;
	isOpened: boolean;
	onClose: Function;
	anchor: 'left' | 'right' | 'top' | 'bottom';
	drawerStyle?: CSSProperties
};

function Drawer(props: DrawerProps) {
	const { children, isOpened, onClose, anchor, drawerStyle } = props;

	useEffect(() => {
		if (isOpened)
			document.getElementsByTagName('body')[0].classList.add('drawer-opened');
		else
			document.getElementsByTagName('body')[0].classList.remove('drawer-opened');
	}, [isOpened]);

	useEffect(() => {
		function handleEscapeKey(event: KeyboardEvent) {
			if (event.code === 'Escape') {
				onClose()
			}
		}

		document.addEventListener('keydown', handleEscapeKey)
		return () => document.removeEventListener('keydown', handleEscapeKey)
	}, []);

	const drawerContent = (
		<div
			className={clsx({
				[styles.drawerWrapper]: isOpened,
			})}
			onClick={() => onClose()}
		>
			<div
				onClick={(e) => e.stopPropagation()}
				style={drawerStyle}
				className={clsx(styles.drawer, styles?.[`anchor-${anchor}`], {
					[styles?.[`draw-${anchor}`]]: isOpened,
				})}
			>
				{children}
			</div>
		</div>
	);

	return ReactDOM.createPortal(
		drawerContent,
		document.getElementById('drawer-root')!
	);
}

export default Drawer;
