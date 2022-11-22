import {createUrlAssessmentRequestFromDiscriminatorValue} from './createUrlAssessmentRequestFromDiscriminatorValue';
import {BaseCollectionPaginationCountResponse, UrlAssessmentRequest} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UrlAssessmentRequestCollectionResponse extends BaseCollectionPaginationCountResponse implements Parsable {
    /** The value property */
    private _value?: UrlAssessmentRequest[] | undefined;
    /**
     * Instantiates a new UrlAssessmentRequestCollectionResponse and sets the default values.
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
            "value": n => { this.value = n.getCollectionOfObjectValues<UrlAssessmentRequest>(createUrlAssessmentRequestFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<UrlAssessmentRequest>("value", this.value);
    };
    /**
     * Gets the value property value. The value property
     * @returns a urlAssessmentRequest
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: UrlAssessmentRequest[] | undefined) {
        this._value = value;
    };
}
