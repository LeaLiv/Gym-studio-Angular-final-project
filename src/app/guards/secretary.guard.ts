import { CanActivateFn } from '@angular/router';

export const secretaryGuard: CanActivateFn = (route, state) => {
  let role=sessionStorage.getItem("role");
  if(role==="secretary")
    return true;
  alert("אינך מורשה לגשת לדף זה");
  return false;
};
