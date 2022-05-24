import {createUserScopeTeamsAppInstallationFromDiscriminatorValue} from './createUserScopeTeamsAppInstallationFromDiscriminatorValue';
import {EntityImpl, UserScopeTeamsAppInstallationImpl} from './index';
import {UserScopeTeamsAppInstallation} from './userScopeTeamsAppInstallation';
import {UserTeamwork} from './userTeamwork';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to user. */
export class UserTeamworkImpl extends EntityImpl implements Parsable, UserTeamwork {
    /** The apps installed in the personal scope of this user. */
    public installedApps?: UserScopeTeamsAppInstallation[] | undefined;
    /**
     * Instantiates a new userTeamwork and sets the default values.
     * @param userTeamworkParameterValue 
     */
    public constructor(userTeamworkParameterValue?: UserTeamwork | undefined) {
        super();
        this.installedApps = userTeamworkParameterValue?.installedApps ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
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
        if(this.installedApps && this.installedApps.length != 0){        const installedAppsArrValue: UserScopeTeamsAppInstallationImpl[] = []; this.installedApps?.forEach(element => {installedAppsArrValue.push(new UserScopeTeamsAppInstallationImpl(element));});
        writer.writeCollectionOfObjectValues<UserScopeTeamsAppInstallationImpl>("installedApps", installedAppsArrValue);
        }
    };
}
