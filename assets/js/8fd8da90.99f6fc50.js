"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[374],{3905:function(e,n,r){r.d(n,{Zo:function(){return p},kt:function(){return h}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),s=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=s(e.components);return t.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),h=o,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||a;return r?t.createElement(m,i(i({ref:n},p),{},{components:r})):t.createElement(m,i({ref:n},p))}));function h(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9484:function(e,n,r){r.r(n),r.d(n,{default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var t=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={},c={unversionedId:"blog/showcase/zrpc",id:"blog/showcase/zrpc",isDocsHomePage:!1,title:"Enterprise RPC framework zRPC",description:"The recent hot open source project go-zero is an integrated variety of engineering practices including Web and RPC protocols for a full-featured microservices framework, today we will analyze the RPC part of zRPC github.com/zeromicro/go-zero/tree/master/zrpc).",source:"@site/docs/blog/showcase/zrpc.md",sourceDirName:"blog/showcase",slug:"/blog/showcase/zrpc",permalink:"/docs/blog/showcase/zrpc",editUrl:"https://github.com/zeromicro/portal/edit/main/docs/blog/showcase/zrpc.md",version:"current",lastUpdatedAt:1654248485,formattedLastUpdatedAt:"6/3/2022",frontMatter:{},sidebar:"blog",previous:{title:"Rapid development of microservices",permalink:"/docs/blog/showcase/shorturl"},next:{title:"Mysql",permalink:"/docs/blog/showcase/mysql"}},s=[{value:"zRPC First Look",id:"zrpc-first-look",children:[]},{value:"zRPC Principle Analysis",id:"zrpc-principle-analysis",children:[]},{value:"Interceptor module",id:"interceptor-module",children:[]},{value:"resolver module",id:"resolver-module",children:[]},{value:"balancer module",id:"balancer-module",children:[]},{value:"Summary",id:"summary",children:[]}],p={toc:s};function d(e){var n=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The recent hot open source project ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/zeromicro/go-zero"},"go-zero")," is an integrated variety of engineering practices including Web and RPC protocols for a full-featured microservices framework, today we will analyze the RPC part of ",(0,a.kt)("a",{parentName:"p",href:"https://"},"zRPC")," github.com/zeromicro/go-zero/tree/master/zrpc)."),(0,a.kt)("p",null,"The underlying dependency of zRPC on gRPC has built-in modules for service registration, load balancing, and interceptors, which also include adaptive load dropping, adaptive fusion, flow limiting, and other microservice governance schemes, making it an easy-to-use enterprise-class RPC framework that can be used directly in production."),(0,a.kt)("h3",{id:"zrpc-first-look"},"zRPC First Look"),(0,a.kt)("p",null,"zRPC supports both direct connection and etcd-based service discovery. We use etcd-based service discovery as an example to demonstrate the basic use of zRPC."),(0,a.kt)("h5",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Create the hello.yaml configuration file with the following configuration."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"Name: hello.rpc           // Service name\nListenOn: 127.0.0.1:9090  // Listen address\nEtcd:\n  Hosts:\n    - 127.0.0.1:2379      // ETCD service address\n  Key: hello.rpc          // Service registration key\n")),(0,a.kt)("h5",{id:"create-proto-file"},"Create proto file"),(0,a.kt)("p",null,"Create the hello.proto file and generate the corresponding go code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},'syntax = "proto3";\n\npackage pb;\n\nservice Greeter {\n  rpc SayHello (HelloRequest) returns (HelloReply) {}\n}\n\nmessage HelloRequest {\n  string name = 1;\n}\n\nmessage HelloReply {\n  string message = 1;\n}\n')),(0,a.kt)("p",null,"Code Generation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ protoc --go_out=plugins=grpc:. hello.proto\n")),(0,a.kt)("h5",{id:"server"},"Server"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "context"\n    "flag"\n    "log"\n\n    "example/zrpc/pb"\n\n    "github.com/zeromicro/go-zero/core/conf"\n    "github.com/zeromicro/go-zero/zrpc"\n    "google.golang.org/grpc"\n)\n\ntype Config struct {\n    zrpc.RpcServerConf\n}\n\nvar cfgFile = flag.String("f", "./hello.yaml", "cfg file")\n\nfunc main() {\n    flag.Parse()\n\n    var cfg Config\n    conf.MustLoad(*cfgFile, &cfg)\n\n    srv, err := zrpc.NewServer(cfg.RpcServerConf, func(s *grpc.Server) {\n        pb.RegisterGreeterServer(s, &Hello{})\n    })\n    if err != nil {\n        log.Fatal(err)\n    }\n    srv.Start()\n}\n\ntype Hello struct{}\n\nfunc (h *Hello) SayHello(ctx context.Context, in *pb.HelloRequest) (*pb.HelloReply, error) {\n    return &pb.HelloReply{Message: "hello " + in.Name}, nil\n}\n')),(0,a.kt)("h5",{id:"client"},"Client"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "context"\n    "log"\n\n    "example/zrpc/pb"\n\n    "github.com/zeromicro/go-zero/core/discov"\n    "github.com/zeromicro/go-zero/zrpc"\n)\n\nfunc main() {\n    client := zrpc.MustNewClient(zrpc.RpcClientConf{\n        Etcd: discov.EtcdConf{\n            Hosts: []string{"127.0.0.1:2379"},\n            Key:   "hello.rpc",\n        },\n    })\n\n    conn := client.Conn()\n    hello := pb.NewGreeterClient(conn)\n    reply, err := hello.SayHello(context.Background(), &pb.HelloRequest{Name: "go-zero"})\n    if err != nil {\n        log.Fatal(err)\n    }\n    log.Println(reply.Message)\n}\n')),(0,a.kt)("p",null,"Start the service and see if the service is registered:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ ETCDCTL_API=3 etcdctl get hello.rpc --prefix\nhello.rpc/7587849401504590084\n127.0.0.1:9090\n")),(0,a.kt)("p",null,"Run the client to see the output."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"hello go-zero\n")),(0,a.kt)("p",null,"This example demonstrates the basic use of zRPC, and you can see that building an RPC service with zRPC is very simple and requires only a few lines of code, so let's continue our exploration"),(0,a.kt)("h3",{id:"zrpc-principle-analysis"},"zRPC Principle Analysis"),(0,a.kt)("p",null,"The following figure shows the architecture diagram and main components of zRPC"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zeromicro/zero-doc/main/doc/images/zrpc.png",alt:"zrpc"})),(0,a.kt)("p",null,"zRPC consists of the following main modules."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"discov: service discovery module, which implements the service discovery function based on etcd"),(0,a.kt)("li",{parentName:"ul"},"resolver: service registration module, which implements the resolver.Builder interface of gRPC and registers to gRPC"),(0,a.kt)("li",{parentName:"ul"},"interceptor: interceptor, intercept request and response processing"),(0,a.kt)("li",{parentName:"ul"},"balancer: load balancer module that implements the p2c load balancing algorithm and is registered to gRPC"),(0,a.kt)("li",{parentName:"ul"},"client: zRPC client, responsible for initiating requests"),(0,a.kt)("li",{parentName:"ul"},"server: zRPC server, responsible for processing requests")),(0,a.kt)("p",null,"The main components of zRPC and the main functions of each module are introduced here, among which the resolver and balancer modules implement the open interfaces of gRPC and realize custom resolver and balancer. The interceptor module is the focus of the entire zRPC functionality."),(0,a.kt)("h3",{id:"interceptor-module"},"Interceptor module"),(0,a.kt)("p",null,"gRPC provides interceptor function, mainly for additional processing before and after the request interception operation, which interceptor contains client-side interceptor and server-side interceptor, and is divided into a unary interceptor and stream (Stream) interceptor, here we mainly explain the unary interceptor, stream interceptor the same."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zeromicro/zero-doc/main/doc/images/interceptor.png",alt:"interceptor"})),(0,a.kt)("p",null,"The client-side interceptor is defined as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type UnaryClientInterceptor func(ctx context.Context, method string, req, reply interface{}, cc *ClientConn, invoker UnaryInvoker, opts ...CallOption) error\n")),(0,a.kt)("p",null,"where method is the method name, req, reply are the request and response parameters, cc is the client connection object, invoker parameter is the real execution of the rpc method handler is actually called in the interceptor execution"),(0,a.kt)("p",null,"The server-side interceptor is defined as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type UnaryServerInterceptor func(ctx context.Context, req interface{}, info *UnaryServerInfo, handler UnaryHandler) (resp interface{}, err error)\n")),(0,a.kt)("p",null,"req is the request parameter, info contains the request method properties, and handler is the wrapper for the server-side method, which is also called in the interceptor."),(0,a.kt)("p",null,"zRPC has a rich set of built-in interceptors, including adaptive dowload, adaptive fusion, permission validation, prometheus metrics collection, etc. Due to the large number of interceptors, space is limited to analyze all the interceptors one by one, here we mainly analyze two, adaptive fusion and prometheus service monitoring metrics collection."),(0,a.kt)("h4",{id:"built-in-interceptor-analysis"},"Built-in interceptor analysis"),(0,a.kt)("h5",{id:"adaptive-fuse-breaker"},"Adaptive fuse (breaker)"),(0,a.kt)("p",null,"When the client initiates a request to the server, the client will record the error returned by the server, and when the error reaches a certain percentage, the client will fuse the process itself, discarding a certain percentage of requests to protect downstream dependencies, and can automatically recover. zRPC adaptive fusion follows the ","[Google SRE]","(",(0,a.kt)("a",{parentName:"p",href:"https://landing.google."},"https://landing.google.")," com/sre/sre-book/chapters/handling-overload) with the following algorithm for overload protection."),(0,a.kt)("p",null,"requests: total number of requests"),(0,a.kt)("p",null,"accepts: number of normal requests"),(0,a.kt)("p",null,"K: multiplier (Google SRE recommends 2)"),(0,a.kt)("p",null,"The aggressiveness of the fusion can be modified by changing the value of K. Decreasing the value of K will make the adaptive fusion algorithm more aggressive, and increasing the value of K will make it less aggressive."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/zeromicro/go-zero/blob/master/zrpc/internal/clientinterceptors/breakerinterceptor.go"},"circuit"),"\u5b9a\u4e49\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func BreakerInterceptor(ctx context.Context, method string, req, reply interface{},\n    cc *grpc.ClientConn, invoker grpc.UnaryInvoker, opts ...grpc.CallOption) error {\n    breakerName := path.Join(cc.Target(), method)\n    return breaker.DoWithAcceptable(breakerName, func() error {\n        return invoker(ctx, method, req, reply, cc, opts...)\n    }, codes.Acceptable)\n}\n")),(0,a.kt)("p",null,"The accept method implements the Google SRE overload protection algorithm to determine whether to fuse"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func (b *googleBreaker) accept() error {\n     //  Accepts is the number of normal requests, total is the total number of requests\n   accepts, total := b.history()\n   weightedAccepts := b.k * float64(accepts)\n   // Algorithm Implementation\n   dropRatio := math.Max(0, (float64(total-protection)-weightedAccepts)/float64(total+1))\n   if dropRatio <= 0 {\n      return nil\n   }\n     // Whether the ratio is exceeded\n   if b.proba.TrueOnProba(dropRatio) {\n      return ErrServiceUnavailable\n   }\n\n   return nil\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"doReq")," method first determine whether the fuse, meet the conditions directly return error (circuit breaker is open), does not meet the conditions of the request count to accumulate"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func (b *googleBreaker) doReq(req func() error, fallback func(err error) error, acceptable Acceptable) error {\n   if err := b.accept(); err != nil {\n      if fallback != nil {\n         return fallback(err)\n      } else {\n         return err\n      }\n   }\n\n   defer func() {\n      if e := recover(); e != nil {\n         b.markFailure()\n         panic(e)\n      }\n   }()\n    \n   // RPC requests are executed here\n   err := req()\n   // Normal requests for both total and accepts will add 1\n   if acceptable(err) {\n      b.markSuccess()\n   } else {\n     // Only total will add 1 if the request fails\n      b.markFailure()\n   }\n\n   return err\n}\n")),(0,a.kt)("h5",{id:"prometheus-metrics-collection"},"prometheus metrics collection"),(0,a.kt)("p",null,"Service monitoring is an important tool to understand the current operation status of the service and the trend of changes, monitoring relies on the collection of service metrics, the collection of monitoring metrics through prometheus is the mainstream solution in the industry, zRPC also uses prometheus to collect the metrics"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/zeromicro/go-zero/blob/master/zrpc/internal/serverinterceptors/prometheusinterceptor.go"},"prometheus interceptors"),"\u5b9a\u4e49\u5982\u4e0b\uff1a"),(0,a.kt)("p",null,"This interceptor mainly collects the monitoring metrics of the service, here it mainly collects the time consumption and invocation errors of RPC methods, here it mainly uses Prometheus' Histogram and Counter data types"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func UnaryPrometheusInterceptor() grpc.UnaryServerInterceptor {\n    return func(ctx context.Context, req interface{}, info *grpc.UnaryServerInfo, handler grpc.UnaryHandler) (\n        interface{}, error) {\n    // Record a time before execution\n        startTime := timex.Now()\n        resp, err := handler(ctx, req)\n    // After execution, the time taken to execute the call is calculated via Since\n        metricServerReqDur.Observe(int64(timex.Since(startTime)/time.Millisecond), info.FullMethod)\n    // The error code corresponding to the method\n        metricServerReqCodeTotal.Inc(info.FullMethod, strconv.Itoa(int(status.Code(err))))\n        return resp, err\n    }\n}\n")),(0,a.kt)("h4",{id:"adding-custom-interceptors"},"Adding Custom Interceptors"),(0,a.kt)("p",null,"In addition to the rich built-in interceptors, zRPC also supports the addition of custom interceptors"),(0,a.kt)("p",null,"The Client side adds a one-dimensional interceptor via the AddInterceptor method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func (rc *RpcClient) AddInterceptor(interceptor grpc.UnaryClientInterceptor) {\n    rc.client.AddInterceptor(interceptor)\n}\n")),(0,a.kt)("p",null,"The Server side adds monadic interceptors via the AddUnaryInterceptors method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func (rs *RpcServer) AddUnaryInterceptors(interceptors ...grpc.UnaryServerInterceptor) {\n    rs.server.AddUnaryInterceptors(interceptors...)\n}\n")),(0,a.kt)("h3",{id:"resolver-module"},"resolver module"),(0,a.kt)("p",null,"zRPC service registration architecture diagram.\n\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zeromicro/zero-doc/main/doc/images/resolver.png",alt:"resolver"})),(0,a.kt)("p",null,"The resolver module is customized in zRPC to implement the service registration function. zRPC relies on gRPC at the bottom, and to customize resolver in gRPC you need to implement the resolver.Builder interface."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type Builder interface {\n    Build(target Target, cc ClientConn, opts BuildOptions) (Resolver, error)\n    Scheme() string\n}\n")),(0,a.kt)("p",null,"Where the Build method returns the Resolver, the Resolver is defined as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type Resolver interface {\n    ResolveNow(ResolveNowOptions)\n    Close()\n}\n")),(0,a.kt)("p",null,"There are two types of resolver defined in zRPC, direct and discov, here we mainly analyze discov based on etcd to do service discovery, custom resolver needs to be registered through the Register method provided by gRPC code as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func RegisterResolver() {\n    resolver.Register(&dirBuilder)\n    resolver.Register(&disBuilder)\n}\n")),(0,a.kt)("p",null,"When we start our zRPC Server, we call the Start method, which registers the corresponding service address in etcd as follows."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func (ags keepAliveServer) Start(fn RegisterFn) error {\n    if err := ags.registerEtcd(); err != nil {\n        return err\n    }\n    return ags.Server.Start(fn)\n}\n")),(0,a.kt)("p",null,"When we start the zRPC client, the Build method of our custom resolver is called inside gRPC. zRPC executes the UpdateState method of resolver.ClientConn by calling within the Build method, which registers the service address inside the gRPC client."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func (d *discovBuilder) Build(target resolver.Target, cc resolver.ClientConn, opts resolver.BuildOptions) (\n    resolver.Resolver, error) {\n    hosts := strings.FieldsFunc(target.Authority, func(r rune) bool {\n        return r == EndpointSepChar\n    })\n    sub, err := discov.NewSubscriber(hosts, target.Endpoint)\n    if err != nil {\n        return nil, err\n    }\n\n    update := func() {\n        var addrs []resolver.Address\n        for _, val := range subset(sub.Values(), subsetSize) {\n            addrs = append(addrs, resolver.Address{\n                Addr: val,\n            })\n        }\n        cc.UpdateState(resolver.State{\n            Addresses: addrs,\n        })\n    }\n    sub.AddListener(update)\n    update()\n    return &nopResolver{cc: cc}, nil\n}\n")),(0,a.kt)("p",null,"In discov, all addresses of the specified service are retrieved from etcd by calling the load method at:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func (c *cluster) load(cli EtcdClient, key string) {\n    var resp *clientv3.GetResponse\n    for {\n        var err error\n        ctx, cancel := context.WithTimeout(c.context(cli), RequestTimeout)\n        resp, err = cli.Get(ctx, makeKeyPrefix(key), clientv3.WithPrefix())\n        cancel()\n        if err == nil {\n            break\n        }\n\n        logx.Error(err)\n        time.Sleep(coolDownInterval)\n    }\n\n    var kvs []KV\n    c.lock.Lock()\n    for _, ev := range resp.Kvs {\n        kvs = append(kvs, KV{\n            Key: string(ev.Key),\n            Val: string(ev.Value),\n        })\n    }\n    c.lock.Unlock()\n\n    c.handleChanges(key, kvs)\n}\n")),(0,a.kt)("p",null,"and listens for changes in the service address via watch:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func (c *cluster) watch(cli EtcdClient, key string) {\n    rch := cli.Watch(clientv3.WithRequireLeader(c.context(cli)), makeKeyPrefix(key), clientv3.WithPrefix())\n    for {\n        select {\n        case wresp, ok := <-rch:\n            if !ok {\n                logx.Error("etcd monitor chan has been closed")\n                return\n            }\n            if wresp.Canceled {\n                logx.Error("etcd monitor chan has been canceled")\n                return\n            }\n            if wresp.Err() != nil {\n                logx.Error(fmt.Sprintf("etcd monitor chan error: %v", wresp.Err()))\n                return\n            }\n            c.handleWatchEvents(key, wresp.Events)\n        case <-c.done:\n            return\n        }\n    }\n}\n')),(0,a.kt)("p",null,"This part mainly introduces how to customize the resolver in zRPC, as well as the principle of service discovery based on etcd, through this part of the introduction you can understand the principle of service registration and discovery inside zRPC, the source code is more just a rough analysis of the entire process, if you are more interested in the source code of zRPC can learn on their own"),(0,a.kt)("h3",{id:"balancer-module"},"balancer module"),(0,a.kt)("p",null,"Load balancing schematic."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zeromicro/zero-doc/main/doc/images/balancer.png",alt:null})),(0,a.kt)("p",null,"Avoiding overload is an important indicator of a load balancing strategy, and a good load balancing algorithm can balance server-side resources well. The commonly used load balancing algorithms are Rotation, Random, Hash, Weighted Rotation, etc. However, in order to cope with various complex scenarios, simple load balancing algorithms often do not perform well enough, such as the round robin algorithm when the service response time becomes longer, it is easy to cause the load to stop balancing, so the default load balancing algorithm P2C (Power of Two Choices) is customized in zRPC, similar to resolver, in order to customize balancer also needs to Builder interface defined by gRPC. Since it is similar to resolver, we will not take you through the analysis of how to customize the balancer."),(0,a.kt)("p",null,"Note that zRPC is a client-side load balancing, common and through the nginx intermediate proxy way"),(0,a.kt)("p",null,"The default load balancing algorithm in the zRPC framework is P2C, and the main idea of this algorithm is to"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"do two random selection operations from the list of available nodes to get nodes A and B"),(0,a.kt)("li",{parentName:"ol"},"compare the two nodes A and B and select the node with the lowest load as the selected node")),(0,a.kt)("p",null,"The pseudo code is as follows."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zeromicro/zero-doc/main/doc/images/random_pseudo.png",alt:null})),(0,a.kt)("p",null,"The main algorithm logic is implemented in the Pick method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func (p *p2cPicker) Pick(ctx context.Context, info balancer.PickInfo) (\n    conn balancer.SubConn, done func(balancer.DoneInfo), err error) {\n    p.lock.Lock()\n    defer p.lock.Unlock()\n\n    var chosen *subConn\n    switch len(p.conns) {\n    case 0:\n        return nil, nil, balancer.ErrNoSubConnAvailable\n    case 1:\n        chosen = p.choose(p.conns[0], nil)\n    case 2:\n        chosen = p.choose(p.conns[0], p.conns[1])\n    default:\n        var node1, node2 *subConn\n        for i := 0; i < pickTimes; i++ {\n            a := p.r.Intn(len(p.conns))\n            b := p.r.Intn(len(p.conns) - 1)\n            if b >= a {\n                b++\n            }\n            node1 = p.conns[a]\n            node2 = p.conns[b]\n            if node1.healthy() && node2.healthy() {\n                break\n            }\n        }\n        chosen = p.choose(node1, node2)\n    }\n\n    atomic.AddInt64(&chosen.inflight, 1)\n    atomic.AddInt64(&chosen.requests, 1)\n    return chosen.conn, p.buildDoneFunc(chosen), nil\n}\n")),(0,a.kt)("p",null,"The choose method compares the loads of randomly selected nodes to determine which node to choose."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func (p *p2cPicker) choose(c1, c2 *subConn) *subConn {\n    start := int64(timex.Now())\n    if c2 == nil {\n        atomic.StoreInt64(&c1.pick, start)\n        return c1\n    }\n\n    if c1.load() > c2.load() {\n        c1, c2 = c2, c1\n    }\n\n    pick := atomic.LoadInt64(&c2.pick)\n    if start-pick > forcePick && atomic.CompareAndSwapInt64(&c2.pick, pick, start) {\n        return c2\n    } else {\n        atomic.StoreInt64(&c1.pick, start)\n        return c1\n    }\n}\n")),(0,a.kt)("p",null,"The above mainly introduces the design idea and code implementation of the default load balancing algorithm of zRPC, how the custom balancer is registered to gRPC, the resolver provides the Register method to register, the same balancer also provides the Register method to register."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func init() {\n    balancer.Register(newBuilder())\n}\n\nfunc newBuilder() balancer.Builder {\n    return base.NewBalancerBuilder(Name, new(p2cPickerBuilder))\n}\n")),(0,a.kt)("p",null,"How does gRPC know which balancer to use after registering a balancer? Here we need to use the configuration item to configure, through the grpc.WithBalancerName method at the time of NewClient."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func NewClient(target string, opts ...ClientOption) (*client, error) {\n    var cli client\n    opts = append(opts, WithDialOption(grpc.WithBalancerName(p2c.Name)))\n    if err := cli.dial(target, opts...); err != nil {\n        return nil, err\n    }\n\n    return &cli, nil\n}\n")),(0,a.kt)("p",null,"This part mainly introduces the implementation principle of the load balancing algorithm in zRPC and the specific implementation method, and then introduces how zRPC registers the custom balancer and how to choose the custom balancer, through this part you should have a further understanding of load balancing"),(0,a.kt)("h3",{id:"summary"},"Summary"),(0,a.kt)("p",null,"First, the basic usage of zRPC is introduced. You can see that zRPC is very simple to use, and only a few lines of code are needed to build a high-performance RPC service with service governance capabilities."),(0,a.kt)("p",null,"Next, we introduce several important modules of zRPC and their implementation principles, and analyze some to the source code. The interceptor module is the focus of zRPC, which has a rich set of built-in functions, such as fusion, monitoring, load reduction, etc., which are essential for building highly available microservices. The customization of the load balancing algorithm is no longer a mystery."),(0,a.kt)("p",null,"Finally, zRPC is an RPC framework that has undergone various engineering practices, and is a rare open source project, whether you want to use it for production or learn the design patterns. We hope you can learn more about zRPC through this article."))}d.isMDXComponent=!0}}]);