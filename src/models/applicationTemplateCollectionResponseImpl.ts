import {ApplicationTemplate} from './applicationTemplate';
import {ApplicationTemplateCollectionResponse} from './applicationTemplateCollectionResponse';
import {createApplicationTemplateFromDiscriminatorValue} from './createApplicationTemplateFromDiscriminatorValue';
import {ApplicationTemplateImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ApplicationTemplateCollectionResponseImpl implements AdditionalDataHolder, ApplicationTemplateCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: ApplicationTemplate[] | undefined;
    /**
     * Instantiates a new ApplicationTemplateCollectionResponse and sets the default values.
     * @param applicationTemplateCollectionResponseParameterValue 
     */
    public constructor(applicationTemplateCollectionResponseParameterValue?: ApplicationTemplateCollectionResponse | undefined) {
        this.additionalData = applicationTemplateCollectionResponseParameterValue?.additionalData ? applicationTemplateCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = applicationTemplateCollectionResponseParameterValue?.nextLink ;
        this.value = applicationTemplateCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<ApplicationTemplateImpl>(createApplicationTemplateFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: ApplicationTemplateImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new ApplicationTemplateImpl(element));});
        writer.writeCollectionOfObjectValues<ApplicationTemplateImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
