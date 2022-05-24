import {Album} from './album';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AlbumImpl implements AdditionalDataHolder, Album, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Unique identifier of the [driveItem][] that is the cover of the album. */
    public coverImageItemId?: string | undefined;
    /**
     * Instantiates a new album and sets the default values.
     * @param albumParameterValue 
     */
    public constructor(albumParameterValue?: Album | undefined) {
        this.additionalData = albumParameterValue?.additionalData ? albumParameterValue?.additionalData! : {}
        this.coverImageItemId = albumParameterValue?.coverImageItemId ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "coverImageItemId": n => { this.coverImageItemId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.coverImageItemId){
        writer.writeStringValue("coverImageItemId", this.coverImageItemId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
