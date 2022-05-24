import {createDirectoryRoleTemplateFromDiscriminatorValue} from './createDirectoryRoleTemplateFromDiscriminatorValue';
import {DirectoryRoleTemplate} from './directoryRoleTemplate';
import {DirectoryRoleTemplateCollectionResponse} from './directoryRoleTemplateCollectionResponse';
import {DirectoryRoleTemplateImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DirectoryRoleTemplateCollectionResponseImpl implements AdditionalDataHolder, DirectoryRoleTemplateCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: DirectoryRoleTemplate[] | undefined;
    /**
     * Instantiates a new DirectoryRoleTemplateCollectionResponse and sets the default values.
     * @param directoryRoleTemplateCollectionResponseParameterValue 
     */
    public constructor(directoryRoleTemplateCollectionResponseParameterValue?: DirectoryRoleTemplateCollectionResponse | undefined) {
        this.additionalData = directoryRoleTemplateCollectionResponseParameterValue?.additionalData ? directoryRoleTemplateCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = directoryRoleTemplateCollectionResponseParameterValue?.nextLink ;
        this.value = directoryRoleTemplateCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<DirectoryRoleTemplateImpl>(createDirectoryRoleTemplateFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: DirectoryRoleTemplateImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new DirectoryRoleTemplateImpl(element));});
        writer.writeCollectionOfObjectValues<DirectoryRoleTemplateImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
