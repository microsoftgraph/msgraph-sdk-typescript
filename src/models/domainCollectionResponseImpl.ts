import {createDomainFromDiscriminatorValue} from './createDomainFromDiscriminatorValue';
import {Domain} from './domain';
import {DomainCollectionResponse} from './domainCollectionResponse';
import {DomainImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DomainCollectionResponseImpl implements AdditionalDataHolder, DomainCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: Domain[] | undefined;
    /**
     * Instantiates a new DomainCollectionResponse and sets the default values.
     * @param domainCollectionResponseParameterValue 
     */
    public constructor(domainCollectionResponseParameterValue?: DomainCollectionResponse | undefined) {
        this.additionalData = domainCollectionResponseParameterValue?.additionalData ? domainCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = domainCollectionResponseParameterValue?.nextLink ;
        this.value = domainCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<DomainImpl>(createDomainFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: DomainImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new DomainImpl(element));});
        writer.writeCollectionOfObjectValues<DomainImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
