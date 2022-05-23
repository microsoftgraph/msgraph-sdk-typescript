import {Album} from './album';
import {Bundle} from './bundle';
import {createAlbumFromDiscriminatorValue} from './createAlbumFromDiscriminatorValue';
import {AlbumImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class BundleImpl implements AdditionalDataHolder, Bundle, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** If the bundle is an [album][], then the album property is included */
    public album?: Album | undefined;
    /** Number of children contained immediately within this container. */
    public childCount?: number | undefined;
    /**
     * Instantiates a new bundle and sets the default values.
     * @param bundleParameterValue 
     */
    public constructor(bundleParameterValue?: Bundle | undefined) {
        this.additionalData = bundleParameterValue?.additionalData ? bundleParameterValue?.additionalData! : {}
        this.album = bundleParameterValue?.album ;
        this.childCount = bundleParameterValue?.childCount ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "album": n => { this.album = n.getObjectValue<AlbumImpl>(createAlbumFromDiscriminatorValue); },
            "childCount": n => { this.childCount = n.getNumberValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.album){
        writer.writeObjectValue<AlbumImpl>("album", new AlbumImpl(this.album));
        }
        if(this.childCount){
        writer.writeNumberValue("childCount", this.childCount);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
