import {createSegmentFromDiscriminatorValue} from './createSegmentFromDiscriminatorValue';
import {SegmentImpl} from './index';
import {Segment} from './segment';
import {SegmentCollectionResponse} from './segmentCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SegmentCollectionResponseImpl implements AdditionalDataHolder, Parsable, SegmentCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: Segment[] | undefined;
    /**
     * Instantiates a new SegmentCollectionResponse and sets the default values.
     * @param segmentCollectionResponseParameterValue 
     */
    public constructor(segmentCollectionResponseParameterValue?: SegmentCollectionResponse | undefined) {
        this.additionalData = segmentCollectionResponseParameterValue?.additionalData ? segmentCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = segmentCollectionResponseParameterValue?.nextLink ;
        this.value = segmentCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<SegmentImpl>(createSegmentFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.nextLink){
        writer.writeStringValue("@odata.nextLink", this.nextLink);
        }
        if(this.value && this.value.length != 0){        const valueArrValue: SegmentImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new SegmentImpl(element));});
        writer.writeCollectionOfObjectValues<SegmentImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
