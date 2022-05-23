import {createMobileLobAppFromDiscriminatorValue} from './createMobileLobAppFromDiscriminatorValue';
import {MobileLobAppImpl} from './index';
import {MobileLobApp} from './mobileLobApp';
import {MobileLobAppCollectionResponse} from './mobileLobAppCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MobileLobAppCollectionResponseImpl implements AdditionalDataHolder, MobileLobAppCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: MobileLobApp[] | undefined;
    /**
     * Instantiates a new MobileLobAppCollectionResponse and sets the default values.
     * @param mobileLobAppCollectionResponseParameterValue 
     */
    public constructor(mobileLobAppCollectionResponseParameterValue?: MobileLobAppCollectionResponse | undefined) {
        this.additionalData = mobileLobAppCollectionResponseParameterValue?.additionalData ? mobileLobAppCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = mobileLobAppCollectionResponseParameterValue?.nextLink ;
        this.value = mobileLobAppCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<MobileLobAppImpl>(createMobileLobAppFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: MobileLobAppImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new MobileLobAppImpl(element));});
        writer.writeCollectionOfObjectValues<MobileLobAppImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
