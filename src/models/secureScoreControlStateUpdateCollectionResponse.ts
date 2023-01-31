import {createSecureScoreControlStateUpdateFromDiscriminatorValue} from './createSecureScoreControlStateUpdateFromDiscriminatorValue';
import {BaseCollectionPaginationCountResponse, SecureScoreControlStateUpdate} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SecureScoreControlStateUpdateCollectionResponse extends BaseCollectionPaginationCountResponse implements Parsable {
    private _value?: SecureScoreControlStateUpdate[] | undefined;
    /**
     * Instantiates a new SecureScoreControlStateUpdateCollectionResponse and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "value": n => { this.value = n.getCollectionOfObjectValues<SecureScoreControlStateUpdate>(createSecureScoreControlStateUpdateFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<SecureScoreControlStateUpdate>("value", this.value);
    };
    /**
     * Gets the value property value. 
     * @returns a secureScoreControlStateUpdate
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. 
     * @param value Value to set for the value property.
     */
    public set value(value: SecureScoreControlStateUpdate[] | undefined) {
        this._value = value;
    };
}
