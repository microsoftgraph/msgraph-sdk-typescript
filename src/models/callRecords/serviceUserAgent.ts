import {UserAgent} from './index';
import {ServiceRole} from './serviceRole';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ServiceUserAgent extends UserAgent implements Parsable {
    /** The role property */
    private _role?: ServiceRole | undefined;
    /**
     * Instantiates a new ServiceUserAgent and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.callRecords.serviceUserAgent";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "role": n => { this.role = n.getEnumValue<ServiceRole>(ServiceRole); },
        };
    };
    /**
     * Gets the role property value. The role property
     * @returns a serviceRole
     */
    public get role() {
        return this._role;
    };
    /**
     * Sets the role property value. The role property
     * @param value Value to set for the role property.
     */
    public set role(value: ServiceRole | undefined) {
        this._role = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeEnumValue<ServiceRole>("role", this.role);
    };
}
