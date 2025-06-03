"use client";
import { useEffect } from "react";

export default function LinkedInBadge({
  profileUrl,
  size = "large",
  locale = "en_US",
  theme = "dark",
}) {
  useEffect(() => {
    // Reinitialize LinkedIn badges after component mounts
    if (window.LI && window.LI.NET && window.LI.NET.profileBadge) {
      window.LI.NET.profileBadge.render();
    }
  }, []);

  return (
    <div className="linkedin-badge-container">
      <div
        className="LI-profile-badge"
        data-version="v1"
        data-size={size}
        data-locale={locale}
        data-type="horizontal"
        data-theme={theme}
        data-vanity={profileUrl}
      >
        <a
          className="LI-simple-link text-[#8FBC8F] hover:text-[#8FBC8F]/80 transition-colors"
          href={`https://www.linkedin.com/in/${profileUrl}?trk=profile-badge`}
          target="_blank"
          rel="noopener noreferrer"
        >
          View LinkedIn Profile
        </a>
      </div>
    </div>
  );
}
