import {createDirectoryRoleFromDiscriminatorValue} from './createDirectoryRoleFromDiscriminatorValue';
import {DirectoryRole} from './directoryRole';
import {DirectoryRoleCollectionResponse} from './directoryRoleCollectionResponse';
import {DirectoryRoleImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DirectoryRoleCollectionResponseImpl implements AdditionalDataHolder, DirectoryRoleCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: DirectoryRole[] | undefined;
    /**
     * Instantiates a new DirectoryRoleCollectionResponse and sets the default values.
     * @param directoryRoleCollectionResponseParameterValue 
     */
    public constructor(directoryRoleCollectionResponseParameterValue?: DirectoryRoleCollectionResponse | undefined) {
        this.additionalData = directoryRoleCollectionResponseParameterValue?.additionalData ? directoryRoleCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = directoryRoleCollectionResponseParameterValue?.nextLink ;
        this.value = directoryRoleCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<DirectoryRoleImpl>(createDirectoryRoleFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: DirectoryRoleImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new DirectoryRoleImpl(element));});
        writer.writeCollectionOfObjectValues<DirectoryRoleImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
