import {Application} from './application';
import {ApplicationCollectionResponse} from './applicationCollectionResponse';
import {createApplicationFromDiscriminatorValue} from './createApplicationFromDiscriminatorValue';
import {ApplicationImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ApplicationCollectionResponseImpl implements AdditionalDataHolder, ApplicationCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: Application[] | undefined;
    /**
     * Instantiates a new ApplicationCollectionResponse and sets the default values.
     * @param applicationCollectionResponseParameterValue 
     */
    public constructor(applicationCollectionResponseParameterValue?: ApplicationCollectionResponse | undefined) {
        this.additionalData = applicationCollectionResponseParameterValue?.additionalData ? applicationCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = applicationCollectionResponseParameterValue?.nextLink ;
        this.value = applicationCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<ApplicationImpl>(createApplicationFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: ApplicationImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new ApplicationImpl(element));});
        writer.writeCollectionOfObjectValues<ApplicationImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
