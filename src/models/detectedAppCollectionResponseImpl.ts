import {createDetectedAppFromDiscriminatorValue} from './createDetectedAppFromDiscriminatorValue';
import {DetectedApp} from './detectedApp';
import {DetectedAppCollectionResponse} from './detectedAppCollectionResponse';
import {DetectedAppImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DetectedAppCollectionResponseImpl implements AdditionalDataHolder, DetectedAppCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: DetectedApp[] | undefined;
    /**
     * Instantiates a new DetectedAppCollectionResponse and sets the default values.
     * @param detectedAppCollectionResponseParameterValue 
     */
    public constructor(detectedAppCollectionResponseParameterValue?: DetectedAppCollectionResponse | undefined) {
        this.additionalData = detectedAppCollectionResponseParameterValue?.additionalData ? detectedAppCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = detectedAppCollectionResponseParameterValue?.nextLink ;
        this.value = detectedAppCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<DetectedAppImpl>(createDetectedAppFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: DetectedAppImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new DetectedAppImpl(element));});
        writer.writeCollectionOfObjectValues<DetectedAppImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
