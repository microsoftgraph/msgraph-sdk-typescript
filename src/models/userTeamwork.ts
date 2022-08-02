import {createAssociatedTeamInfoFromDiscriminatorValue} from './createAssociatedTeamInfoFromDiscriminatorValue';
import {createUserScopeTeamsAppInstallationFromDiscriminatorValue} from './createUserScopeTeamsAppInstallationFromDiscriminatorValue';
import {AssociatedTeamInfo, Entity, UserScopeTeamsAppInstallation} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UserTeamwork extends Entity implements Parsable {
    /** The list of associatedTeamInfo objects that a user is associated with. */
    private _associatedTeams?: AssociatedTeamInfo[] | undefined;
    /** The apps installed in the personal scope of this user. */
    private _installedApps?: UserScopeTeamsAppInstallation[] | undefined;
    /**
     * Gets the associatedTeams property value. The list of associatedTeamInfo objects that a user is associated with.
     * @returns a associatedTeamInfo
     */
    public get associatedTeams() {
        return this._associatedTeams;
    };
    /**
     * Sets the associatedTeams property value. The list of associatedTeamInfo objects that a user is associated with.
     * @param value Value to set for the associatedTeams property.
     */
    public set associatedTeams(value: AssociatedTeamInfo[] | undefined) {
        this._associatedTeams = value;
    };
    /**
     * Instantiates a new userTeamwork and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.userTeamwork";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "associatedTeams": n => { this.associatedTeams = n.getCollectionOfObjectValues<AssociatedTeamInfo>(createAssociatedTeamInfoFromDiscriminatorValue); },
            "installedApps": n => { this.installedApps = n.getCollectionOfObjectValues<UserScopeTeamsAppInstallation>(createUserScopeTeamsAppInstallationFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the installedApps property value. The apps installed in the personal scope of this user.
     * @returns a userScopeTeamsAppInstallation
     */
    public get installedApps() {
        return this._installedApps;
    };
    /**
     * Sets the installedApps property value. The apps installed in the personal scope of this user.
     * @param value Value to set for the installedApps property.
     */
    public set installedApps(value: UserScopeTeamsAppInstallation[] | undefined) {
        this._installedApps = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<AssociatedTeamInfo>("associatedTeams", this.associatedTeams);
        writer.writeCollectionOfObjectValues<UserScopeTeamsAppInstallation>("installedApps", this.installedApps);
    };
}
