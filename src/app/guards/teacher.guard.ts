import { CanActivateFn } from '@angular/router';

export const teacherGuard: CanActivateFn = (route, state) => {
  let role=sessionStorage.getItem("role");
  if(role==="teacher")
    return true;
  alert("אינך מורשה לגשת לדף זה");
  return false;
};
