import {AppCatalogs} from './appCatalogs';
import {createTeamsAppFromDiscriminatorValue} from './createTeamsAppFromDiscriminatorValue';
import {EntityImpl, TeamsAppImpl} from './index';
import {TeamsApp} from './teamsApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the appCatalogs singleton. */
export class AppCatalogsImpl extends EntityImpl implements AppCatalogs, Parsable {
    /** The teamsApps property */
    public teamsApps?: TeamsApp[] | undefined;
    /**
     * Instantiates a new appCatalogs and sets the default values.
     * @param appCatalogsParameterValue 
     */
    public constructor(appCatalogsParameterValue?: AppCatalogs | undefined) {
        super();
        this.teamsApps = appCatalogsParameterValue?.teamsApps ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "teamsApps": n => { this.teamsApps = n.getCollectionOfObjectValues<TeamsAppImpl>(createTeamsAppFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.teamsApps && this.teamsApps.length != 0){        const teamsAppsArrValue: TeamsAppImpl[] = []; this.teamsApps?.forEach(element => {teamsAppsArrValue.push(new TeamsAppImpl(element));});
        writer.writeCollectionOfObjectValues<TeamsAppImpl>("teamsApps", teamsAppsArrValue);
        }
    };
}
