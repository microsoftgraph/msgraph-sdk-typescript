/** Provides operations to manage the admin singleton. */
export enum TeamsAsyncOperationType {
    Invalid = "invalid",
    CloneTeam = "cloneTeam",
    ArchiveTeam = "archiveTeam",
    UnarchiveTeam = "unarchiveTeam",
    CreateTeam = "createTeam",
    UnknownFutureValue = "unknownFutureValue",
    TeamifyGroup = "teamifyGroup",
    CreateChannel = "createChannel",
}
