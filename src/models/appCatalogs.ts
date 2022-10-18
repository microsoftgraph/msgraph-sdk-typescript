import {createTeamsAppFromDiscriminatorValue} from './createTeamsAppFromDiscriminatorValue';
import {Entity, TeamsApp} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AppCatalogs extends Entity implements Parsable {
    /** The teamsApps property */
    private _teamsApps?: TeamsApp[] | undefined;
    /**
     * Instantiates a new AppCatalogs and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.appCatalogs";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "teamsApps": n => { this.teamsApps = n.getCollectionOfObjectValues<TeamsApp>(createTeamsAppFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<TeamsApp>("teamsApps", this.teamsApps);
    };
    /**
     * Gets the teamsApps property value. The teamsApps property
     * @returns a teamsApp
     */
    public get teamsApps() {
        return this._teamsApps;
    };
    /**
     * Sets the teamsApps property value. The teamsApps property
     * @param value Value to set for the teamsApps property.
     */
    public set teamsApps(value: TeamsApp[] | undefined) {
        this._teamsApps = value;
    };
}
