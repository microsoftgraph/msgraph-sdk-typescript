import {AuthenticationCombinationConfiguration} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Fido2CombinationConfiguration extends AuthenticationCombinationConfiguration implements Parsable {
    /** A list of AAGUIDs allowed to be used as part of the specified authentication method combinations. */
    private _allowedAAGUIDs?: string[] | undefined;
    /**
     * Gets the allowedAAGUIDs property value. A list of AAGUIDs allowed to be used as part of the specified authentication method combinations.
     * @returns a string
     */
    public get allowedAAGUIDs() {
        return this._allowedAAGUIDs;
    };
    /**
     * Sets the allowedAAGUIDs property value. A list of AAGUIDs allowed to be used as part of the specified authentication method combinations.
     * @param value Value to set for the allowedAAGUIDs property.
     */
    public set allowedAAGUIDs(value: string[] | undefined) {
        this._allowedAAGUIDs = value;
    };
    /**
     * Instantiates a new Fido2CombinationConfiguration and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.fido2CombinationConfiguration";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "allowedAAGUIDs": n => { this.allowedAAGUIDs = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfPrimitiveValues<string>("allowedAAGUIDs", this.allowedAAGUIDs);
    };
}
