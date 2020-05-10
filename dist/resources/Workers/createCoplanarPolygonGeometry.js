define(["./when-b43ff45e","./Check-d404a0fe","./Math-336da716","./Cartesian2-3c21ddb9","./Transforms-ffcbad88","./RuntimeError-bf10f3d5","./WebGLConstants-56de22c0","./ComponentDatatype-8956ad9a","./GeometryAttribute-c9800e88","./GeometryAttributes-fbf888b4","./AttributeCompression-2ec18651","./GeometryPipeline-3f00aefe","./EncodedCartesian3-bf440da4","./IndexDatatype-c5295474","./IntersectionTests-e522b831","./Plane-56dc8a69","./VertexFormat-89c0971b","./GeometryInstance-61aa44f7","./arrayRemoveDuplicates-a7dee4b8","./BoundingRectangle-a8437ba4","./EllipsoidTangentPlane-0c88eccf","./OrientedBoundingBox-2239d753","./CoplanarPolygonGeometryLibrary-0905aa66","./ArcType-46047bc6","./EllipsoidRhumbLine-6daaa4d2","./PolygonPipeline-b2950861","./PolygonGeometryLibrary-9cdf0808"],function(s,e,V,R,I,t,a,M,H,B,n,w,r,O,o,i,p,A,F,l,y,c,G,m,u,z,L){"use strict";var S=new R.Cartesian3,E=new l.BoundingRectangle,N=new R.Cartesian2,Q=new R.Cartesian2,T=new R.Cartesian3,D=new R.Cartesian3,_=new R.Cartesian3,k=new R.Cartesian3,j=new R.Cartesian3,U=new R.Cartesian3,Y=new I.Quaternion,q=new I.Matrix3,J=new I.Matrix3,W=new R.Cartesian3;function Z(e,t,a,n,r,o,i,l){var s=e.positions,p=z.PolygonPipeline.triangulate(e.positions2D,e.holes);p.length<3&&(p=[0,1,2]);var y=O.IndexDatatype.createTypedArray(s.length,p.length);y.set(p);var c=q;if(0!==n){var m=I.Quaternion.fromAxisAngle(o,n,Y);if(c=I.Matrix3.fromQuaternion(m,c),t.tangent||t.bitangent){m=I.Quaternion.fromAxisAngle(o,-n,Y);var u=I.Matrix3.fromQuaternion(m,J);i=R.Cartesian3.normalize(I.Matrix3.multiplyByVector(u,i,i),i),t.bitangent&&(l=R.Cartesian3.normalize(R.Cartesian3.cross(o,i,l),l))}}else c=I.Matrix3.clone(I.Matrix3.IDENTITY,c);var d=Q;t.st&&(d.x=a.x,d.y=a.y);for(var g=s.length,b=3*g,v=new Float64Array(b),f=t.normal?new Float32Array(b):void 0,h=t.tangent?new Float32Array(b):void 0,C=t.bitangent?new Float32Array(b):void 0,x=t.st?new Float32Array(2*g):void 0,P=0,w=0,A=0,F=0,G=0,L=0;L<g;L++){var E=s[L];if(v[P++]=E.x,v[P++]=E.y,v[P++]=E.z,t.st){var T=r(I.Matrix3.multiplyByVector(c,E,S),N);R.Cartesian2.subtract(T,d,T);var D=V.CesiumMath.clamp(T.x/a.width,0,1),_=V.CesiumMath.clamp(T.y/a.height,0,1);x[G++]=D,x[G++]=_}t.normal&&(f[w++]=o.x,f[w++]=o.y,f[w++]=o.z),t.tangent&&(h[F++]=i.x,h[F++]=i.y,h[F++]=i.z),t.bitangent&&(C[A++]=l.x,C[A++]=l.y,C[A++]=l.z)}var k=new B.GeometryAttributes;return t.position&&(k.position=new H.GeometryAttribute({componentDatatype:M.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:v})),t.normal&&(k.normal=new H.GeometryAttribute({componentDatatype:M.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:f})),t.tangent&&(k.tangent=new H.GeometryAttribute({componentDatatype:M.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:h})),t.bitangent&&(k.bitangent=new H.GeometryAttribute({componentDatatype:M.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:C})),t.st&&(k.st=new H.GeometryAttribute({componentDatatype:M.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:x})),new H.Geometry({attributes:k,indices:y,primitiveType:H.PrimitiveType.TRIANGLES})}function d(e){var t=(e=s.defaultValue(e,s.defaultValue.EMPTY_OBJECT)).polygonHierarchy,a=s.defaultValue(e.vertexFormat,p.VertexFormat.DEFAULT);this._vertexFormat=p.VertexFormat.clone(a),this._polygonHierarchy=t,this._stRotation=s.defaultValue(e.stRotation,0),this._ellipsoid=R.Ellipsoid.clone(s.defaultValue(e.ellipsoid,R.Ellipsoid.WGS84)),this._workerName="createCoplanarPolygonGeometry",this.packedLength=L.PolygonGeometryLibrary.computeHierarchyPackedLength(t)+p.VertexFormat.packedLength+R.Ellipsoid.packedLength+2}d.fromPositions=function(e){return new d({polygonHierarchy:{positions:(e=s.defaultValue(e,s.defaultValue.EMPTY_OBJECT)).positions},vertexFormat:e.vertexFormat,stRotation:e.stRotation,ellipsoid:e.ellipsoid})},d.pack=function(e,t,a){return a=s.defaultValue(a,0),a=L.PolygonGeometryLibrary.packPolygonHierarchy(e._polygonHierarchy,t,a),R.Ellipsoid.pack(e._ellipsoid,t,a),a+=R.Ellipsoid.packedLength,p.VertexFormat.pack(e._vertexFormat,t,a),a+=p.VertexFormat.packedLength,t[a++]=e._stRotation,t[a]=e.packedLength,t};var g=R.Ellipsoid.clone(R.Ellipsoid.UNIT_SPHERE),b=new p.VertexFormat,v={polygonHierarchy:{}};return d.unpack=function(e,t,a){t=s.defaultValue(t,0);var n=L.PolygonGeometryLibrary.unpackPolygonHierarchy(e,t);t=n.startingIndex,delete n.startingIndex;var r=R.Ellipsoid.unpack(e,t,g);t+=R.Ellipsoid.packedLength;var o=p.VertexFormat.unpack(e,t,b);t+=p.VertexFormat.packedLength;var i=e[t++],l=e[t];return s.defined(a)||(a=new d(v)),a._polygonHierarchy=n,a._ellipsoid=R.Ellipsoid.clone(r,a._ellipsoid),a._vertexFormat=p.VertexFormat.clone(o,a._vertexFormat),a._stRotation=i,a.packedLength=l,a},d.createGeometry=function(e){var t=e._vertexFormat,a=e._polygonHierarchy,n=e._stRotation,r=a.positions;if(!((r=F.arrayRemoveDuplicates(r,R.Cartesian3.equalsEpsilon,!0)).length<3)){var o=T,i=D,l=_,s=j,p=U;if(G.CoplanarPolygonGeometryLibrary.computeProjectTo2DArguments(r,k,s,p)){if(o=R.Cartesian3.cross(s,p,o),o=R.Cartesian3.normalize(o,o),!R.Cartesian3.equalsEpsilon(k,R.Cartesian3.ZERO,V.CesiumMath.EPSILON6)){var y=e._ellipsoid.geodeticSurfaceNormal(k,W);R.Cartesian3.dot(o,y)<0&&(o=R.Cartesian3.negate(o,o),s=R.Cartesian3.negate(s,s))}var c=G.CoplanarPolygonGeometryLibrary.createProjectPointsTo2DFunction(k,s,p),m=G.CoplanarPolygonGeometryLibrary.createProjectPointTo2DFunction(k,s,p);t.tangent&&(i=R.Cartesian3.clone(s,i)),t.bitangent&&(l=R.Cartesian3.clone(p,l));var u=L.PolygonGeometryLibrary.polygonsFromHierarchy(a,c,!1),d=u.hierarchy,g=u.polygons;if(0!==d.length){r=d[0].outerRing;for(var b=I.BoundingSphere.fromPoints(r),v=L.PolygonGeometryLibrary.computeBoundingRectangle(o,m,r,n,E),f=[],h=0;h<g.length;h++){var C=new A.GeometryInstance({geometry:Z(g[h],t,v,n,m,o,i,l)});f.push(C)}var x=w.GeometryPipeline.combineInstances(f)[0];x.attributes.position.values=new Float64Array(x.attributes.position.values),x.indices=O.IndexDatatype.createTypedArray(x.attributes.position.values.length/3,x.indices);var P=x.attributes;return t.position||delete P.position,new H.Geometry({attributes:P,indices:x.indices,primitiveType:x.primitiveType,boundingSphere:b})}}}},function(e,t){return s.defined(t)&&(e=d.unpack(e,t)),d.createGeometry(e)}});