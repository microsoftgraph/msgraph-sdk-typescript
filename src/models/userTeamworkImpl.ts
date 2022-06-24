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
    public associatedTeams?: AssociatedTeamInfo[] | undefined;
    /** The apps installed in the personal scope of this user. */
    public installedApps?: UserScopeTeamsAppInstallation[] | undefined;
    /**
     * Instantiates a new userTeamwork and sets the default values.
     * @param userTeamworkParameterValue 
     */
    public constructor(userTeamworkParameterValue?: UserTeamwork | undefined) {
        super(userTeamworkParameterValue);
        const associatedTeamsArrValue: AssociatedTeamInfoImpl[] = []; this.associatedTeams?.forEach(element => {associatedTeamsArrValue.push(element instanceof AssociatedTeamInfoImpl? element : new AssociatedTeamInfoImpl(element));});
        this.associatedTeams = associatedTeamsArrValue;
        const installedAppsArrValue: UserScopeTeamsAppInstallationImpl[] = []; this.installedApps?.forEach(element => {installedAppsArrValue.push(element instanceof UserScopeTeamsAppInstallationImpl? element : new UserScopeTeamsAppInstallationImpl(element));});
        this.installedApps = installedAppsArrValue;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.associatedTeams && this.associatedTeams.length != 0){        const associatedTeamsArrValue: AssociatedTeamInfoImpl[] = []; this.associatedTeams?.forEach(element => {associatedTeamsArrValue.push(element instanceof AssociatedTeamInfoImpl? element : new AssociatedTeamInfoImpl(element));});
            writer.writeCollectionOfObjectValues<AssociatedTeamInfoImpl>("associatedTeams", associatedTeamsArrValue);
        }
        if(this.installedApps && this.installedApps.length != 0){        const installedAppsArrValue: UserScopeTeamsAppInstallationImpl[] = []; this.installedApps?.forEach(element => {installedAppsArrValue.push(element instanceof UserScopeTeamsAppInstallationImpl? element : new UserScopeTeamsAppInstallationImpl(element));});
            writer.writeCollectionOfObjectValues<UserScopeTeamsAppInstallationImpl>("installedApps", installedAppsArrValue);
        }
    };
}
