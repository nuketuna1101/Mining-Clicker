// SweetAlert2를 이용하기 위한 편의 클래스
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);
export const showAlert = (title: string, text: string, icon: 'success' | 'error' | 'warning' | 'info' | 'question') => {
    MySwal.fire({
        title,
        text,
        icon,
        confirmButtonText: '확인',
        customClass: {
            container: 'swal-container',
        },
    });
};
export const showToast = (title: string, icon: 'success' | 'error' | 'warning' | 'info' | 'question', duration: number = 3000) => {
    MySwal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: duration,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', MySwal.stopTimer);
            toast.addEventListener('mouseleave', MySwal.resumeTimer);
        }
    }).fire({
        icon,
        title,
    });
};
export const showConfirm = (title: string, text: string, icon: 'success' | 'error' | 'warning' | 'info' | 'question') => {
    return MySwal.fire({
        title,
        text,
        icon,
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
    });
};