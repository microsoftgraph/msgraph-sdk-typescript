import {createDirectoryAuditFromDiscriminatorValue} from './createDirectoryAuditFromDiscriminatorValue';
import {DirectoryAudit} from './directoryAudit';
import {DirectoryAuditCollectionResponse} from './directoryAuditCollectionResponse';
import {DirectoryAuditImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DirectoryAuditCollectionResponseImpl implements AdditionalDataHolder, DirectoryAuditCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: DirectoryAudit[] | undefined;
    /**
     * Instantiates a new DirectoryAuditCollectionResponse and sets the default values.
     * @param directoryAuditCollectionResponseParameterValue 
     */
    public constructor(directoryAuditCollectionResponseParameterValue?: DirectoryAuditCollectionResponse | undefined) {
        this.additionalData = directoryAuditCollectionResponseParameterValue?.additionalData ? directoryAuditCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = directoryAuditCollectionResponseParameterValue?.nextLink ;
        this.value = directoryAuditCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<DirectoryAuditImpl>(createDirectoryAuditFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: DirectoryAuditImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new DirectoryAuditImpl(element));});
        writer.writeCollectionOfObjectValues<DirectoryAuditImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
