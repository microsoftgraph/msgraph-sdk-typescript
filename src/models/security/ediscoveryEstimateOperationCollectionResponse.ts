import {BaseCollectionPaginationCountResponse} from '../';
import {createEdiscoveryEstimateOperationFromDiscriminatorValue} from './createEdiscoveryEstimateOperationFromDiscriminatorValue';
import {EdiscoveryEstimateOperation} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EdiscoveryEstimateOperationCollectionResponse extends BaseCollectionPaginationCountResponse implements Parsable {
    private _value?: EdiscoveryEstimateOperation[] | undefined;
    /**
     * Instantiates a new EdiscoveryEstimateOperationCollectionResponse and sets the default values.
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
            "value": n => { this.value = n.getCollectionOfObjectValues<EdiscoveryEstimateOperation>(createEdiscoveryEstimateOperationFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<EdiscoveryEstimateOperation>("value", this.value);
    };
    /**
     * Gets the value property value. 
     * @returns a ediscoveryEstimateOperation
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. 
     * @param value Value to set for the value property.
     */
    public set value(value: EdiscoveryEstimateOperation[] | undefined) {
        this._value = value;
    };
}
