import {ConditionalAccessExternalTenants} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ConditionalAccessEnumeratedExternalTenants extends ConditionalAccessExternalTenants implements Parsable {
    /** The members property */
    private _members?: string[] | undefined;
    /**
     * Instantiates a new ConditionalAccessEnumeratedExternalTenants and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.conditionalAccessEnumeratedExternalTenants";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "members": n => { this.members = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Gets the members property value. The members property
     * @returns a string
     */
    public get members() {
        return this._members;
    };
    /**
     * Sets the members property value. The members property
     * @param value Value to set for the members property.
     */
    public set members(value: string[] | undefined) {
        this._members = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfPrimitiveValues<string>("members", this.members);
    };
}
