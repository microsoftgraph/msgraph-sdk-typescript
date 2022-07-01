import {Album} from './album';
import {Bundle} from './bundle';
import {createAlbumFromDiscriminatorValue} from './createAlbumFromDiscriminatorValue';
import {AlbumImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class BundleImpl implements Bundle {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** If the bundle is an [album][], then the album property is included */
    private _album?: Album | undefined;
    /** Number of children contained immediately within this container. */
    private _childCount?: number | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Gets the album property value. If the bundle is an [album][], then the album property is included
     * @returns a AlbumInterface
     */
    public get album() {
        return this._album;
    };
    /**
     * Sets the album property value. If the bundle is an [album][], then the album property is included
     * @param value Value to set for the album property.
     */
    public set album(value: Album | undefined) {
        if(value) {
            this._album = value instanceof AlbumImpl? value as AlbumImpl: new AlbumImpl(value);
        }
    };
    /**
     * Gets the childCount property value. Number of children contained immediately within this container.
     * @returns a integer
     */
    public get childCount() {
        return this._childCount;
    };
    /**
     * Sets the childCount property value. Number of children contained immediately within this container.
     * @param value Value to set for the childCount property.
     */
    public set childCount(value: number | undefined) {
        if(value) {
            this._childCount = value;
        }
    };
    /**
     * Instantiates a new bundle and sets the default values.
     * @param bundleParameterValue 
     */
    public constructor(bundleParameterValue?: Bundle | undefined) {
        this._additionalData = bundleParameterValue?.additionalData ? bundleParameterValue?.additionalData! : {};
        this._album = bundleParameterValue?.album;
        this._childCount = bundleParameterValue?.childCount;
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
            writer.writeObjectValue<AlbumImpl>("album", (this.album instanceof AlbumImpl? this.album as AlbumImpl: new AlbumImpl(this.album)));
        }
        if(this.childCount){
            writer.writeNumberValue("childCount", this.childCount);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
