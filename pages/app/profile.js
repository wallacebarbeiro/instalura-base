import { authService } from '../../src/services/auth/authService';
import { userService } from '../../src/services/user/userService';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';

import ProfilePage from '../../src/components/screens/ProfileScreen';

export default websitePageHOC(ProfilePage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Profile Page',
    },
    menuProps: {
      display: true,
      isLoged: true,
    },
  },
});

export async function getServerSideProps(ctx) {
  const auth = authService(ctx);
  const hasActiveSession = await auth.hasActiveSession();

  if (hasActiveSession) {
    const session = await auth.getSession();
    const profilePage = await userService.getProfilePage(ctx);
    return {
      props: {
        user: {
          ...session,
          ...profilePage.user,
        },
        posts: profilePage.posts,
      },
    };
  }

  ctx.res.writeHead(307, { location: '/login' });
  return ctx.res.end();
}
