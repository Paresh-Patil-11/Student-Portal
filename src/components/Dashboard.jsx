import * as React from "react";
import { createTheme, styled } from "@mui/material/styles";
import DescriptionIcon from "@mui/icons-material/Description";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import Grid from "@mui/material/Grid";
import "./Dashboard.css";
import CollegeProfile from "./CollegeProfile";
import StudentDetails from "./StudentDetails";
import RegisterStudent from "./RegisterStudent";

const NAVIGATION = [
  {
    kind: "header",
    title: "Main items",
  },
  {
    segment: "college-profile",
    title: "College Profile",
    icon: <i className="fa-solid fa-school"></i>,
  },
  {
    kind: "divider",
  },
  {
    kind: "header",
    title: "Student Data Hub",
  },
  {
    segment: "student-details",
    title: "Student Details",
    icon: <DescriptionIcon />,
  },
  {
    segment: "register-student",
    title: "Register Student",
    icon: <DescriptionIcon />,
  },
  // {
  //   segment: "manage-student",
  //   title: "Manage Student",
  //   icon: <DescriptionIcon />,
  // },
];

// Theme setup
const demoTheme = createTheme({
  colorSchemes: { light: true, dark: true },
  cssVariables: {
    colorSchemeSelector: "class",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function useDemoRouter(initialPath) {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  return router;
}

function PageRenderer({ path }) {
  switch (path) {
    case "/college-profile":
      return <CollegeProfile />;
    case "/student-details":
      return <StudentDetails />;
    case "/register-student":
      return <RegisterStudent />;
    case "/manage-student":
      return <ManageStudent />;
    default:
      return <div>Welcome to the Dashboard</div>;
  }
}

export default function Dashboard(props) {
  const { window } = props;
  const router = useDemoRouter("/college-profile");
  const demoWindow = window ? window() : undefined;

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <PageContainer>
          <PageRenderer path={router.pathname} />
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}
