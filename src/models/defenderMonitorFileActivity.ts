/** Provides operations to manage the collection of applicationTemplate entities. */
export enum DefenderMonitorFileActivity {
    /** User Defined, default value, no intent. */
    UserDefined = "userDefined",
    /** Disable monitoring file activity. */
    Disable = "disable",
    /** Monitor all files. */
    MonitorAllFiles = "monitorAllFiles",
    /**  Monitor incoming files only. */
    MonitorIncomingFilesOnly = "monitorIncomingFilesOnly",
    /** Monitor outgoing files only. */
    MonitorOutgoingFilesOnly = "monitorOutgoingFilesOnly",
}
