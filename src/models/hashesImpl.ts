import {Hashes} from './hashes';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class HashesImpl implements AdditionalDataHolder, Hashes, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The CRC32 value of the file (if available). Read-only. */
    public crc32Hash?: string | undefined;
    /** A proprietary hash of the file that can be used to determine if the contents of the file have changed (if available). Read-only. */
    public quickXorHash?: string | undefined;
    /** SHA1 hash for the contents of the file (if available). Read-only. */
    public sha1Hash?: string | undefined;
    /** SHA256 hash for the contents of the file (if available). Read-only. */
    public sha256Hash?: string | undefined;
    /**
     * Instantiates a new hashes and sets the default values.
     * @param hashesParameterValue 
     */
    public constructor(hashesParameterValue?: Hashes | undefined) {
        this.additionalData = hashesParameterValue?.additionalData ? hashesParameterValue?.additionalData! : {}
        this.crc32Hash = hashesParameterValue?.crc32Hash ;
        this.quickXorHash = hashesParameterValue?.quickXorHash ;
        this.sha1Hash = hashesParameterValue?.sha1Hash ;
        this.sha256Hash = hashesParameterValue?.sha256Hash ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "crc32Hash": n => { this.crc32Hash = n.getStringValue(); },
            "quickXorHash": n => { this.quickXorHash = n.getStringValue(); },
            "sha1Hash": n => { this.sha1Hash = n.getStringValue(); },
            "sha256Hash": n => { this.sha256Hash = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.crc32Hash){
        writer.writeStringValue("crc32Hash", this.crc32Hash);
        }
        if(this.quickXorHash){
        writer.writeStringValue("quickXorHash", this.quickXorHash);
        }
        if(this.sha1Hash){
        writer.writeStringValue("sha1Hash", this.sha1Hash);
        }
        if(this.sha256Hash){
        writer.writeStringValue("sha256Hash", this.sha256Hash);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
