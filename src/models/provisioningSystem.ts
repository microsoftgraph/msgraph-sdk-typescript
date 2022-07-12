import {AdminMember1, DetailsInfo, Identity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ProvisioningSystem extends Identity implements Parsable {
    /** Details of the system. */
    private _details?: DetailsInfo | AdminMember1 | undefined;
    /**
     * Instantiates a new ProvisioningSystem and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the details property value. Details of the system.
     * @returns a admin
     */
    public get details() {
        return this._details;
    };
    /**
     * Sets the details property value. Details of the system.
     * @param value Value to set for the details property.
     */
    public set details(value: DetailsInfo | AdminMember1 | undefined) {
        this._details = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "details": n => { this.details = n.getObjectValue<DetailsInfo>(createDetailsInfoFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<DetailsInfo>("details", this.details);
    };
}
