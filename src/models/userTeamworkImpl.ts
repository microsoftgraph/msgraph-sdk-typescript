import {AssociatedTeamInfo} from './associatedTeamInfo';
import {createAssociatedTeamInfoFromDiscriminatorValue} from './createAssociatedTeamInfoFromDiscriminatorValue';
import {createUserScopeTeamsAppInstallationFromDiscriminatorValue} from './createUserScopeTeamsAppInstallationFromDiscriminatorValue';
import {AssociatedTeamInfoImpl, EntityImpl, UserScopeTeamsAppInstallationImpl} from './index';
import {UserScopeTeamsAppInstallation} from './userScopeTeamsAppInstallation';
import {UserTeamwork} from './userTeamwork';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class UserTeamworkImpl extends EntityImpl implements UserTeamwork {
    /** The list of associatedTeamInfo objects that a user is associated with. */
    private _associatedTeams?: AssociatedTeamInfo[] | undefined;
    /** The apps installed in the personal scope of this user. */
    private _installedApps?: UserScopeTeamsAppInstallation[] | undefined;
    /**
     * Gets the associatedTeams property value. The list of associatedTeamInfo objects that a user is associated with.
     * @returns a AssociatedTeamInfoInterface
     */
    public get associatedTeams() {
        return this._associatedTeams;
    };
    /**
     * Sets the associatedTeams property value. The list of associatedTeamInfo objects that a user is associated with.
     * @param value Value to set for the associatedTeams property.
     */
    public set associatedTeams(value: AssociatedTeamInfo[] | undefined) {
        if(value) {
            const associatedTeamsArrValue: AssociatedTeamInfoImpl[] = [];
            this.associatedTeams?.forEach(element => {
                associatedTeamsArrValue.push((element instanceof AssociatedTeamInfoImpl? element:new AssociatedTeamInfoImpl(element)));
            });
            this._associatedTeams = associatedTeamsArrValue;
        }
    };
    /**
     * Instantiates a new userTeamwork and sets the default values.
     * @param userTeamworkParameterValue 
     */
    public constructor(userTeamworkParameterValue?: UserTeamwork | undefined) {
        super(userTeamworkParameterValue);
        this._associatedTeams = userTeamworkParameterValue?.associatedTeams;
        this._installedApps = userTeamworkParameterValue?.installedApps;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "associatedTeams": n => { this.associatedTeams = n.getCollectionOfObjectValues<AssociatedTeamInfoImpl>(createAssociatedTeamInfoFromDiscriminatorValue); },
            "installedApps": n => { this.installedApps = n.getCollectionOfObjectValues<UserScopeTeamsAppInstallationImpl>(createUserScopeTeamsAppInstallationFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the installedApps property value. The apps installed in the personal scope of this user.
     * @returns a UserScopeTeamsAppInstallationInterface
     */
    public get installedApps() {
        return this._installedApps;
    };
    /**
     * Sets the installedApps property value. The apps installed in the personal scope of this user.
     * @param value Value to set for the installedApps property.
     */
    public set installedApps(value: UserScopeTeamsAppInstallation[] | undefined) {
        if(value) {
            const installedAppsArrValue: UserScopeTeamsAppInstallationImpl[] = [];
            this.installedApps?.forEach(element => {
                installedAppsArrValue.push((element instanceof UserScopeTeamsAppInstallationImpl? element:new UserScopeTeamsAppInstallationImpl(element)));
            });
            this._installedApps = installedAppsArrValue;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.associatedTeams && this.associatedTeams.length != 0){        const associatedTeamsArrValue: AssociatedTeamInfoImpl[] = [];
        this.associatedTeams?.forEach(element => {
            associatedTeamsArrValue.push((element instanceof AssociatedTeamInfoImpl? element:new AssociatedTeamInfoImpl(element)));
        });
            writer.writeCollectionOfObjectValues<AssociatedTeamInfoImpl>("associatedTeams", associatedTeamsArrValue);
        }
        if(this.installedApps && this.installedApps.length != 0){        const installedAppsArrValue: UserScopeTeamsAppInstallationImpl[] = [];
        this.installedApps?.forEach(element => {
            installedAppsArrValue.push((element instanceof UserScopeTeamsAppInstallationImpl? element:new UserScopeTeamsAppInstallationImpl(element)));
        });
            writer.writeCollectionOfObjectValues<UserScopeTeamsAppInstallationImpl>("installedApps", installedAppsArrValue);
        }
    };
}
