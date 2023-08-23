export const isOnTrack = (certifications, codeWarsScore) => {
  return (
    certifications.resume &&
    certifications.linkedin &&
    certifications.github &&
    certifications.mockInterview &&
    codeWarsScore > 600
  );
};
