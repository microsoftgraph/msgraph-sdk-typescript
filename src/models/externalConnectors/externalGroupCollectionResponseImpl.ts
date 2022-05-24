import {createExternalGroupFromDiscriminatorValue} from './createExternalGroupFromDiscriminatorValue';
import {ExternalGroup} from './externalGroup';
import {ExternalGroupCollectionResponse} from './externalGroupCollectionResponse';
import {ExternalGroupImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ExternalGroupCollectionResponseImpl implements AdditionalDataHolder, ExternalGroupCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: ExternalGroup[] | undefined;
    /**
     * Instantiates a new ExternalGroupCollectionResponse and sets the default values.
     * @param externalGroupCollectionResponseParameterValue 
     */
    public constructor(externalGroupCollectionResponseParameterValue?: ExternalGroupCollectionResponse | undefined) {
        this.additionalData = externalGroupCollectionResponseParameterValue?.additionalData ? externalGroupCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = externalGroupCollectionResponseParameterValue?.nextLink ;
        this.value = externalGroupCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<ExternalGroupImpl>(createExternalGroupFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: ExternalGroupImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new ExternalGroupImpl(element));});
        writer.writeCollectionOfObjectValues<ExternalGroupImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
